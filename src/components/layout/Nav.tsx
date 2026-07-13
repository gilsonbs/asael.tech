import type { MouseEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks, type NavItem } from './navLinks'

export default function Nav({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation()

  function handleClick(item: NavItem) {
    return (event: MouseEvent) => {
      if (item.scrollTo && location.pathname === item.to) {
        event.preventDefault()
        document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      }
      onNavigate?.()
    }
  }

  return (
    <div className="flex items-center gap-8 text-sm text-muted max-[760px]:hidden">
      {navLinks.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          end={item.to === '/'}
          onClick={handleClick(item)}
          className={({ isActive }) =>
            `transition-colors hover:text-text ${isActive ? 'text-text' : 'text-muted'}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}
