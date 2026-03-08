const platforms = ['Allegro', 'WooCommerce', 'Shopify', 'BaseLinker', 'Ceneo', 'Google Shopping'];

export const SocialProofBar = () => (
  <section className="bg-[#F5F5F5] py-4">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
      <span className="text-sm text-muted-foreground whitespace-nowrap">Działa ze sklepami na:</span>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {platforms.map((p) => (
          <span key={p} className="text-xs font-medium text-muted-foreground bg-background px-3 py-1 rounded-full border">
            {p}
          </span>
        ))}
      </div>
    </div>
  </section>
);
