import Button from '../components/ui/Button'
import TerminalHero from '../components/sections/TerminalHero'

const stackItems = ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Electron', 'Capacitor']

const pilares = [
  {
    idx: 'SITES',
    title: 'Institucionais, landing pages e e-commerce',
    description:
      'Presença digital rápida de publicar e fácil de manter — com performance e SEO desde o primeiro deploy.',
    from: 'a partir de R$ 1.200',
  },
  {
    idx: 'APPS',
    title: 'Aplicativos mobile e desktop',
    description:
      'MVPs enxutos para validar rápido, ou apps completos com backend próprio e painel administrativo.',
    from: 'a partir de R$ 9.000',
  },
  {
    idx: 'SAAS',
    title: 'Sistemas e plataformas sob medida',
    description:
      'Produtos com múltiplos perfis de usuário, integrações externas e regras de negócio complexas.',
    from: 'sob orçamento',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative z-10 px-0 pb-20 pt-24 md:pt-[100px]">
        <div className="wrap">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange/25 bg-orange/10 px-3 py-1.5 font-mono text-[12.5px] text-orange">
            ● disponível para novos projetos
          </div>
          <h1 className="max-w-[820px] text-[clamp(36px,6vw,62px)] font-extrabold leading-[1.06] tracking-tight">
            Sites, aplicativos e sistemas <span className="text-blue">sob medida</span> — do zero ao ar.
          </h1>
          <p className="mt-6 max-w-[560px] text-lg text-muted leading-relaxed md:text-[19px]">
            App house full-service para negócios que precisam de tecnologia real, não de template. Um único
            ponto de contato, do primeiro protótipo ao deploy em produção.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button to="/precos" variant="primary">
              Ver planos e preços
            </Button>
            <Button to="/portfolio" variant="ghost">
              Ver portfólio →
            </Button>
          </div>

          <TerminalHero />
        </div>
      </section>

      <section className="relative z-10 border-y border-border bg-surface py-7">
        <div className="wrap flex flex-wrap items-center justify-between gap-9">
          <span className="whitespace-nowrap font-mono text-[12.5px] text-muted-2">
            // stack que sustenta cada entrega
          </span>
          <div className="flex flex-wrap gap-7">
            {stackItems.map((item) => (
              <span key={item} className="font-mono text-[13.5px] text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="pilares" className="relative z-10 py-16 md:py-24">
        <div className="wrap">
          <div className="mb-12 max-w-[600px]">
            <div className="font-mono text-[12.5px] uppercase tracking-wide text-blue">O que fazemos</div>
            <h2 className="mt-2.5 text-[clamp(26px,4vw,36px)] font-extrabold tracking-tight">
              Três frentes, um único time.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {pilares.map((pilar) => (
              <div key={pilar.idx} className="bg-surface p-8 transition-colors hover:bg-surface-2">
                <div className="font-mono text-[13px] text-muted-2">{pilar.idx}</div>
                <h3 className="mt-3.5 text-xl font-bold">{pilar.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{pilar.description}</p>
                <div className="mt-[18px] font-mono text-[13px] text-orange">{pilar.from}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
