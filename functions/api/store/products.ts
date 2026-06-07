interface Env {
  SQUARE_ACCESS_TOKEN?: string;
  SQUARE_LOCATION_ID?: string;
}

type SquareCatalogItem = {
  type: string;
  id: string;
  item_data?: {
    name?: string;
    description?: string;
    variations?: Array<{
      item_variation_data?: {
        price_money?: { amount?: number; currency?: string };
      };
    }>;
  };
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const accessToken = context.env.SQUARE_ACCESS_TOKEN;
  const locationId = context.env.SQUARE_LOCATION_ID;

  if (!accessToken || !locationId) {
    return Response.json(
      {
        products: [],
        error: "Square is not configured. Set SQUARE_ACCESS_TOKEN and SQUARE_LOCATION_ID in Cloudflare.",
      },
      { status: 503 }
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

    return Response.json({ products });
  } catch (error) {
    return Response.json(
      {
        products: [],
        error: error instanceof Error ? error.message : "Failed to load store products",
      },
      { status: 500 }
    );
  }
};
