import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8">
      <div className="wrap flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-[13px] text-muted-2">asael.tech © 2026</span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link to="/privacidade" className="font-mono text-[13px] text-muted-2 hover:text-text">
            Política de Privacidade
          </Link>
          <span className="font-mono text-[13px] text-muted-2">sites · aplicativos · saas</span>
        </div>
      </div>
    </footer>
  )
}
