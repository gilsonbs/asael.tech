import { useEffect, useState, type ReactNode } from 'react'

interface TerminalLine {
  content: ReactNode
}

const lines: TerminalLine[] = [
  {
    content: (
      <>
        <span className="text-green">➜</span>{' '}
        <span className="text-text">novo projeto: e-commerce Rosa Carmen</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="text-green">➜</span> stack: React + Supabase + Mercado Pago{' '}
        <span className="text-green">✓ configurado</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="text-green">➜</span> deploy: produção{' '}
        <span className="text-green">✓ no ar em 18 dias</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="text-green">➜</span> <span className="text-text">próximo: seu projeto</span>
      </>
    ),
  },
]

const REVEAL_DELAYS_MS = [200, 900, 1600, 2300]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', listener)
    return () => query.removeEventListener('change', listener)
  }, [])

  return reduced
}

export default function TerminalHero() {
  const reducedMotion = usePrefersReducedMotion()
  const [visibleCount, setVisibleCount] = useState(reducedMotion ? lines.length : 0)

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCount(lines.length)
      return
    }

    setVisibleCount(0)
    const timers = REVEAL_DELAYS_MS.map((delay, index) =>
      setTimeout(() => setVisibleCount(index + 1), delay),
    )
    return () => timers.forEach(clearTimeout)
  }, [reducedMotion])

  return (
    <div className="mt-14 max-w-[640px] overflow-hidden rounded-xl border border-border bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 font-mono text-xs text-muted-2">asael.tech — build log</span>
      </div>
      <div className="p-5 font-mono text-[13.5px] leading-relaxed text-[#B8C2D6]">
        {lines.slice(0, visibleCount).map((line, index) => {
          const isLast = index === visibleCount - 1 && index === lines.length - 1
          return (
            <div key={index} className="mb-2.5 animate-fade-in">
              {line.content}
              {isLast && (
                <span
                  aria-hidden="true"
                  className="ml-0.5 inline-block h-3.5 w-[7px] animate-blink bg-blue align-middle"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
