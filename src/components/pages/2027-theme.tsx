import { PageHeader } from '@/components/page-header'


export function ThemePage() {
  return (
    <main>
      <PageHeader title="Conference Theme" />
      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          The Hidden Ledger: Power, Risk, and the Unequal Burden of Global Crises
        </h2>
        <p className="mx-auto mt-12 max-w-4xl text-left text-lg leading-relaxed text-muted-foreground md:text-xl">
          Behind every global crisis lies a hidden ledger of power, risk, and responsibility. When conflict erupts, disease spreads, or economic and environmental pressures intensify, the consequences rarely fall equally on those involved. Countries with fewer resources often face the greatest obstacles in responding to crises, while those with greater economic and political influence have more capacity to shape the decisions that affect others. This imbalance runs through some of the most pressing challenges facing the international community today. In Sudan and the Democratic Republic of the Congo, armed conflicts have left civilian populations bearing the consequences of prolonged instability. In developing nations, volatile commodity prices and mounting sovereign debt threaten food security and economic stability, while climate change places already vulnerable communities under further strain. Meanwhile, the growing use of digital technologies and private military companies raises concerns about accountability and the protection of human rights. Across these issues, the distribution of power rarely reflects the distribution of risk and responsibility. When global decisions carry consequences far beyond those who make them, who should be held responsible, and who is left to bear the cost?
        </p>
      </section>
    </main>
  )
}
