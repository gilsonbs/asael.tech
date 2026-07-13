import type { ReactNode, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'ghost'

interface BaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler
}

interface LinkButtonProps extends BaseProps {
  to: string
  href?: never
  type?: never
}

interface AnchorButtonProps extends BaseProps {
  href: string
  to?: never
  type?: never
  target?: string
  rel?: string
}

interface NativeButtonProps extends BaseProps {
  to?: never
  href?: never
  type?: 'button' | 'submit'
  disabled?: boolean
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue text-bg font-bold hover:bg-[#7CA2FF] hover:-translate-y-px',
  ghost: 'border border-border text-text font-semibold hover:border-blue hover:bg-blue/10',
}

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-[18px] py-2.5 text-sm transition-all duration-150 disabled:pointer-events-none disabled:opacity-50'

export default function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '', onClick } = props
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if ('href' in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button
      type={props.type ?? 'button'}
      onClick={onClick}
      disabled={'disabled' in props ? props.disabled : undefined}
      className={classes}
    >
      {children}
    </button>
  )
}
