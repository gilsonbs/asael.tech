import type { MouseEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '../ui/Button'
import { navLinks, type NavItem } from './navLinks'

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const location = useLocation()

  function handleClick(item: NavItem) {
    return (event: MouseEvent) => {
      if (item.scrollTo && location.pathname === item.to) {
        event.preventDefault()
        onClose()
        window.setTimeout(() => {
          document.getElementById(item.scrollTo!)?.scrollIntoView({ behavior: 'smooth' })
        }, 50)
        return
      }
      onClose()
    }
  }

  return (
    <div id="mobile-menu" className="hidden border-t border-border bg-bg px-6 py-6 max-[760px]:block">
      <div className="flex flex-col gap-1">
        {navLinks.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === '/'}
            onClick={handleClick(item)}
            className={({ isActive }) =>
              `min-h-11 rounded-lg px-3 py-3 text-base transition-colors hover:bg-surface hover:text-text ${
                isActive ? 'text-text' : 'text-muted'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <Button to="/contato" variant="primary" onClick={onClose} className="mt-3 w-full text-center">
          Solicitar orçamento
        </Button>
      </div>
    </div>
  )
}
