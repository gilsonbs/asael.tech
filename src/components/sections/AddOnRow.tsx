import type { AddOn } from '../../data/pricing'
import { formatCurrency } from '../../data/pricing'

export default function AddOnRow({ addOn }: { addOn: AddOn }) {
  const priceLabel =
    addOn.priceMax === null
      ? `a partir de ${formatCurrency(addOn.priceMin)}`
      : `${formatCurrency(addOn.priceMin)} – ${formatCurrency(addOn.priceMax)}`

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-4 text-[14.5px] last:border-b-0">
      <span className="text-text">{addOn.name}</span>
      <span className="whitespace-nowrap font-mono text-orange">
        {priceLabel}
        {addOn.suffix}
      </span>
    </div>
  )
}
