import Button from '../ui/Button'
import type { PricingTier } from '../../data/pricing'
import { categoryLabels, formatCurrency } from '../../data/pricing'

export default function PriceCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-200 hover:-translate-y-1 ${
        tier.featured
          ? 'border-blue bg-surface bg-gradient-to-b from-blue/[0.06] to-surface to-40%'
          : 'border-border bg-surface hover:border-blue'
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-[11px] left-6 rounded-full bg-blue px-2.5 py-1 font-mono text-[10.5px] font-bold tracking-wide text-bg">
          MAIS PEDIDO
        </span>
      )}
      <div className="font-mono text-xs uppercase tracking-wide text-muted-2">
        {categoryLabels[tier.category]}
      </div>
      <h4 className="mt-2 text-[19px] font-bold">{tier.name}</h4>
      <div className="mt-4 text-[26px] font-extrabold tracking-tight">
        {tier.priceMax === null ? (
          <>
            a partir de <span>{formatCurrency(tier.priceMin)}</span>
          </>
        ) : (
          <>
            {formatCurrency(tier.priceMin)}
            <small className="text-[13px] font-medium text-muted"> – {formatCurrency(tier.priceMax)}</small>
          </>
        )}
      </div>
      <ul className="mt-[18px] flex-1 space-y-0">
        {tier.features.map((feature) => (
          <li key={feature} className="relative py-1.5 pl-5 text-[13.5px] text-muted">
            <span className="absolute left-0 font-mono text-blue">›</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        to="/contato"
        variant={tier.featured ? 'primary' : 'ghost'}
        className="mt-5 w-full text-center"
      >
        {tier.ctaLabel ?? 'Solicitar orçamento'}
      </Button>
    </div>
  )
}
