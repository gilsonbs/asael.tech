import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    function handleResize() {
      if (window.innerWidth > 760) setMenuOpen(false)
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/75 backdrop-blur-md">
      <nav className="wrap flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 py-2 text-lg font-extrabold tracking-tight">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green shadow-[0_0_10px_var(--color-green)]" />
          asael<span className="text-muted-2">.tech</span>
        </Link>
        <Nav />
        <div className="flex items-center gap-3">
          <Button to="/contato" variant="primary" className="max-[760px]:hidden">
            Solicitar orçamento
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="hidden min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-lg text-text max-[760px]:flex"
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  )
}
