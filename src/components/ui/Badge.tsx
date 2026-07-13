import type { ReactNode } from 'react'

type BadgeTone = 'blue' | 'green' | 'purple' | 'orange'

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

const toneClasses: Record<BadgeTone, string> = {
  blue: 'bg-blue/10 text-blue border-blue/30',
  green: 'bg-green/10 text-green border-green/30',
  purple: 'bg-purple/10 text-purple border-purple/30',
  orange: 'bg-orange/10 text-orange border-orange/30',
}

export default function Badge({ children, tone = 'blue', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-1 font-mono text-[10.5px] font-semibold tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
