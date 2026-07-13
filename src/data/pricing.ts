export interface PricingTier {
  category: 'sites' | 'apps' | 'saas'
  name: string
  priceMin: number
  priceMax: number | null // null = "a partir de", sem teto
  features: string[]
  featured?: boolean
  ctaLabel?: string
}

export interface AddOn {
  name: string
  priceMin: number
  priceMax: number | null // null = "a partir de", sem teto
  suffix?: string // ex: '/mês'
}

export const categoryLabels: Record<PricingTier['category'], string> = {
  sites: 'Sites',
  apps: 'Aplicativos',
  saas: 'SaaS / Sistemas',
}

export const pricingTiers: PricingTier[] = [
  {
    category: 'sites',
    name: 'Landing Page',
    priceMin: 1200,
    priceMax: 2200,
    features: ['1 página, design exclusivo', 'Copy + formulário de contato', 'Deploy incluído'],
  },
  {
    category: 'sites',
    name: 'Institucional',
    priceMin: 2800,
    priceMax: 4800,
    features: ['Até 5 páginas', 'Blog opcional', 'SEO básico incluso'],
    featured: true,
  },
  {
    category: 'sites',
    name: 'E-commerce',
    priceMin: 6500,
    priceMax: 12000,
    features: ['Catálogo + checkout Mercado Pago', 'Painel administrativo', 'Gestão de pedidos'],
  },
  {
    category: 'apps',
    name: 'App MVP',
    priceMin: 9000,
    priceMax: 16000,
    features: ['1 plataforma (Android ou iOS)', 'Jornada única, autenticação básica', 'Publicação na loja'],
  },
  {
    category: 'apps',
    name: 'App Completo',
    priceMin: 22000,
    priceMax: 45000,
    features: ['Multiplataforma + backend próprio', 'Painel administrativo', 'Integrações externas'],
  },
  {
    category: 'saas',
    name: 'Sob medida',
    priceMin: 15000,
    priceMax: null,
    features: ['Múltiplos perfis de usuário', 'Integrações e regras de negócio', 'Escopo detalhado antes de fechar'],
    ctaLabel: 'Conversar sobre o projeto',
  },
]

export const addOns: AddOn[] = [
  { name: 'Integração com IA (chatbot, geração de conteúdo)', priceMin: 900, priceMax: 2500 },
  { name: 'Painel administrativo / dashboard', priceMin: 1500, priceMax: 3500 },
  { name: 'Integração de pagamento (Mercado Pago)', priceMin: 800, priceMax: 1500 },
  { name: 'App mobile complementar ao site', priceMin: 6000, priceMax: null },
  { name: 'Manutenção mensal / suporte', priceMin: 300, priceMax: 900, suffix: '/mês' },
  { name: 'SEO avançado + copy estratégico', priceMin: 700, priceMax: 1400 },
]

export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  })
}
