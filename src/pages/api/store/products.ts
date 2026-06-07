import type { APIRoute } from "astro";

type SquareCatalogItem = {
  type: string;
  id: string;
  item_data?: {
    name?: string;
    description?: string;
    variations?: Array<{
      id: string;
      item_variation_data?: {
        price_money?: { amount?: number; currency?: string };
      };
    }>;
  };
};

export const GET: APIRoute = async ({ locals }) => {
  const runtime = locals.runtime as { env?: Record<string, string> } | undefined;
  const accessToken = runtime?.env?.SQUARE_ACCESS_TOKEN;
  const locationId = runtime?.env?.SQUARE_LOCATION_ID;

  if (!accessToken || !locationId) {
    return new Response(
      JSON.stringify({
        products: [],
        error: "Square is not configured. Set SQUARE_ACCESS_TOKEN and SQUARE_LOCATION_ID in Cloudflare.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const response = await fetch("https://connect.squareup.com/v2/catalog/list?types=ITEM", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Square-Version": "2024-10-17",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Square API error: ${response.status}`);
    }

    const payload = (await response.json()) as { objects?: SquareCatalogItem[] };
    const products = (payload.objects ?? [])
      .filter((item) => item.type === "ITEM" && item.item_data?.name)
      .map((item) => {
        const variation = item.item_data?.variations?.[0];
        const amount = variation?.item_variation_data?.price_money?.amount;
        const currency = variation?.item_variation_data?.price_money?.currency ?? "USD";

        return {
          id: item.id,
          name: item.item_data?.name ?? "Product",
          description: item.item_data?.description,
          price:
            typeof amount === "number"
              ? new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount / 100)
              : undefined,
        };
      });

    return new Response(JSON.stringify({ products }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        products: [],
        error: error instanceof Error ? error.message : "Failed to load store products",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
