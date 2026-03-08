const comingSoon = ['WooCommerce', 'Shopify', 'BaseLinker', 'Ceneo', 'Google Shopping'];

export const SocialProofBar = () => (
  <section className="bg-[#F5F5F5] py-4">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
      <span className="text-sm text-muted-foreground whitespace-nowrap">Obecnie obsługujemy:</span>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs font-bold text-primary bg-background px-3 py-1 rounded-full border border-primary">
          Allegro
        </span>
        <span className="mx-1 text-border">|</span>
        {comingSoon.map((p) => (
          <span key={p} className="text-xs text-[#AAAAAA] bg-[#FAFAFA] px-3 py-1 rounded-full border border-[#DDDDDD]">
            {p} <span className="text-accent-brand text-[10px]">· wkrótce</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);
