import { useMemo, useState } from 'react'
import Button from '../components/ui/Button'
import CaseCard from '../components/sections/CaseCard'
import { cases, categoryFilters, type CaseCategory } from '../data/cases'
import { WHATSAPP_URL } from '../data/contact'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<CaseCategory | 'todos'>('todos')

  const filteredCases = useMemo(
    () => (activeFilter === 'todos' ? cases : cases.filter((item) => item.category === activeFilter)),
    [activeFilter],
  )

  return (
    <>
      <section className="relative z-10 pb-12 pt-20 md:pt-24">
        <div className="wrap">
          <div className="font-mono text-[12.5px] uppercase tracking-wide text-blue">Portfólio</div>
          <h1 className="mt-3 max-w-[640px] text-[clamp(32px,5vw,48px)] font-extrabold tracking-tight">
            Projetos reais, código real.
          </h1>
          <p className="mt-4 max-w-[560px] text-[17px] text-muted">
            Cada case mostra o problema, a decisão técnica por trás da solução e o resultado — sem
            enrolação de "abordagem artesanal".
          </p>
        </div>
      </section>

      <section className="wrap">
        <div className="mb-10 flex flex-wrap gap-2.5" role="group" aria-label="Filtrar por categoria">
          {categoryFilters.map((filter) => {
            const isActive = filter.value === activeFilter
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={isActive}
                className={`min-h-11 rounded-full border px-3.5 py-2 font-mono text-[12.5px] transition-colors ${
                  isActive
                    ? 'border-blue bg-blue/10 text-blue'
                    : 'border-border text-muted hover:border-blue/50 hover:text-text'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 pb-24 md:grid-cols-2">
          {filteredCases.map((item) => (
            <CaseCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="relative z-10 py-24 text-center">
        <div className="wrap">
          <h2 className="text-[clamp(26px,4vw,36px)] font-extrabold tracking-tight">
            Seu projeto pode ser o próximo case aqui.
          </h2>
          <p className="mt-3.5 text-muted">Conte o que você precisa e receba um orçamento em até 24h.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <Button to="/contato" variant="primary">
              Solicitar orçamento
            </Button>
            <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="ghost">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
