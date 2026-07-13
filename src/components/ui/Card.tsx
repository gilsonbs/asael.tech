import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface ${
        hover ? 'transition-all duration-200 hover:-translate-y-1 hover:border-blue' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
