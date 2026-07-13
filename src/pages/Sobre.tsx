import { credential } from '../data/about'

const storyItems = [
  {
    year: '01',
    title: 'Briefing e escopo',
    description:
      'Levantamento de requisitos reais, com dados de mercado quando fazem diferença na decisão — não achismo.',
  },
  {
    year: '02',
    title: 'Prototipação visual',
    description: 'Identidade e telas validadas com você antes de qualquer implementação — sem retrabalho de última hora.',
  },
  {
    year: '03',
    title: 'Desenvolvimento em etapas',
    description:
      'Implementação sequencial e assistida por IA, com cada etapa revisável — você acompanha o progresso, não só o resultado final.',
  },
  {
    year: '04',
    title: 'Deploy e suporte',
    description: 'No ar com domínio, hospedagem e, se quiser, um plano de manutenção contínua.',
  },
]

const stackTags = ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase', 'Electron', 'Capacitor', 'Anthropic SDK']

export default function Sobre() {
  return (
    <>
      <section className="relative z-10 pb-10 pt-20 md:pt-[90px]">
        <div className="wrap">
          <div className="font-mono text-[12.5px] uppercase tracking-wide text-blue">Sobre</div>
          <h1 className="mt-3 max-w-[680px] text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight">
            Um dev, processo estruturado, entrega real.
          </h1>
          <p className="mt-[18px] max-w-[600px] text-[17px] leading-[1.7] text-muted">
            A Asael.tech não é uma equipe de 20 pessoas — é um único ponto de contato técnico, do primeiro
            protótipo ao deploy em produção, usando um processo que a maioria das agências ainda não
            adotou.
          </p>
          <div className="mt-[22px] flex max-w-[600px] items-center gap-2.5 rounded-[10px] border border-border bg-surface px-4 py-3 text-[13.5px] text-muted">
            <span className="flex-shrink-0 rounded-md border border-orange/30 bg-orange/[0.08] px-2 py-[3px] font-mono text-[11px] text-orange">
              {credential.badge}
            </span>
            <span>{credential.text}</span>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 md:py-[90px]">
        <div className="wrap grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:gap-[60px]">
          <div>
            <h3 className="mb-1.5 text-[15px] font-bold">Como eu trabalho</h3>
            <p className="text-[13.5px] leading-relaxed text-muted">
              Cada projeto segue um briefing estruturado antes de qualquer linha de código, e é construído
              em etapas sequenciais e revisáveis — não em blocos fechados que só aparecem prontos no fim.
            </p>
          </div>
          <div>
            {storyItems.map((item, index) => (
              <div
                key={item.year}
                className={`grid grid-cols-[70px_1fr] gap-6 border-t border-border py-[22px] ${
                  index === storyItems.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="pt-0.5 font-mono text-[13px] text-muted-2">{item.year}</div>
                <div>
                  <h4 className="text-[15.5px] font-bold">{item.title}</h4>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="wrap">
          <div className="rounded-2xl border border-border bg-surface p-9">
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2.5">
              <h3 className="text-[19px] font-bold">Stack e diferencial técnico</h3>
              <span className="font-mono text-xs text-muted-2">// o que sustenta cada entrega</span>
            </div>
            <div className="mb-7 flex flex-wrap gap-2.5">
              {stackTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border px-3 py-1.5 font-mono text-[12.5px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-start gap-3.5 rounded-lg border border-border bg-surface-2 px-5 py-[18px]">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange" />
              <p className="text-sm leading-relaxed text-muted">
                <strong className="text-text">Por que a entrega é mais rápida sem perder qualidade:</strong>{' '}
                o desenvolvimento é assistido por fluxos de IA estruturados em cada etapa — do código ao
                conteúdo — o que reduz o tempo de build sem pular briefing, testes ou revisão. É tecnologia
                moderna aplicada ao processo, não só ao produto final.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
