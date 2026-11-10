import { PageHeader } from '@/components/page-header'

export function TravelPage() {
  return (
    <main>
      <PageHeader title="Transportation" />

      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-pretty text-xl leading-relaxed md:text-2xl">
            BIPHMUN 2027 will provide a complimentary shuttle bus service connecting the BIPH
            campus with two designated hotel pick-up and drop-off locations: Le Méridien Hotel and
            Wondy Gelato (near the Ronald McDonald bench). The shuttle will operate on Friday
            evening, Saturday morning, and Sunday morning, with no additional charge.
            Transportation registration details, including schedules and sign-up instructions,
            will be released at least one month before the conference.
          </p>
        </div>
      </section>
    </main>
  )
}
