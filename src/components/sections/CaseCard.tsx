import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import type { Case } from '../../data/cases'

export default function CaseCard({ item }: { item: Case }) {
  return (
    <Link
      to={`/portfolio/${item.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-blue"
    >
      <div className="relative flex h-[180px] items-center justify-center overflow-hidden border-b border-border bg-[radial-gradient(circle_at_30%_20%,rgba(91,140,255,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(255,107,53,0.12),transparent_55%)] bg-surface-2">
        <Badge tone={item.badge === 'real' ? 'green' : 'purple'} className="absolute left-3.5 top-3.5 z-10">
          {item.badge === 'real' ? 'CASE REAL' : 'CONCEITO'}
        </Badge>
        {item.preview ? (
          <iframe
            src={item.preview}
            title={`Preview ${item.title}`}
            scrolling="no"
            className="pointer-events-none absolute left-0 top-0 origin-top-left border-none"
            style={{ width: '200%', height: '200%', transform: 'scale(0.5)' }}
          />
        ) : (
          <span className="font-mono text-[13px] text-muted-2">{item.glyph}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="font-mono text-[11.5px] uppercase tracking-wide text-muted-2">
          {item.categoryLabel}
        </div>
        <h3 className="mt-2 text-[19px] font-bold">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span key={tech} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-[18px] text-[13.5px] font-semibold text-blue">Ver case completo →</div>
      </div>
    </Link>
  )
}
