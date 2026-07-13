import { Link, useParams } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { cases } from '../data/cases'

export default function CaseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const item = cases.find((c) => c.slug === slug)

  if (!item) {
    return (
      <div className="wrap py-24 text-center">
        <h1 className="text-2xl font-extrabold">Case não encontrado</h1>
        <p className="mt-3 text-muted">O projeto que você procura não existe ou foi removido.</p>
        <Button to="/portfolio" variant="ghost" className="mt-7 inline-flex">
          ← Voltar ao portfólio
        </Button>
      </div>
    )
  }

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="wrap">
        <Link to="/portfolio" className="text-sm text-muted transition-colors hover:text-text">
          ← Voltar ao portfólio
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="border-b border-border bg-[radial-gradient(circle_at_15%_0%,rgba(91,140,255,0.10),transparent_60%)] p-10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted-2">
              <span>{item.categoryLabel}</span>
              <Badge tone={item.badge === 'real' ? 'green' : 'purple'}>
                {item.badge === 'real' ? 'CASE REAL' : 'CONCEITO'}
              </Badge>
            </div>
            <h1 className="mt-3 text-[30px] font-extrabold tracking-tight">{item.title}</h1>
            <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-muted">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            <div className="bg-surface p-7 md:p-8">
              <div className="font-mono text-xs text-muted-2">01</div>
              <h4 className="mb-2.5 mt-2 text-[15px] font-bold">Problema</h4>
              <p className="text-[13.5px] leading-relaxed text-muted">{item.problema}</p>
            </div>
            <div className="bg-surface p-7 md:p-8">
              <div className="font-mono text-xs text-muted-2">02</div>
              <h4 className="mb-2.5 mt-2 text-[15px] font-bold">Solução</h4>
              <p className="text-[13.5px] leading-relaxed text-muted">{item.solucao}</p>
            </div>
            <div className="bg-surface p-7 md:p-8">
              <div className="font-mono text-xs text-muted-2">03</div>
              <h4 className="mb-2.5 mt-2 text-[15px] font-bold text-green">Resultado</h4>
              <p className="text-[13.5px] leading-relaxed text-muted">{item.resultado}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-[clamp(24px,3.5vw,32px)] font-extrabold tracking-tight">
            Seu projeto pode ser o próximo case aqui.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3.5">
            <Button to="/contato" variant="primary">
              Solicitar orçamento
            </Button>
            <Button to="/portfolio" variant="ghost">
              Ver outros cases
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
