export interface NavItem {
  label: string
  to: string
  scrollTo?: string
}

export const navLinks: NavItem[] = [
  { label: 'Serviços', to: '/', scrollTo: 'pilares' },
  { label: 'Preços', to: '/precos' },
  { label: 'Portfólio', to: '/portfolio' },
  { label: 'Sobre', to: '/sobre' },
]
