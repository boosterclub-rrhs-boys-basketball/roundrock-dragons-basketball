export const onRequestPost: PagesFunction = async () => {
  return Response.json(
    { error: "Authentication is not yet configured. Complete Phase 2 migration to enable parent login." },
    { status: 501 }
  );
};
