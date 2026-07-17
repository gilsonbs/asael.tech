export type CaseCategory = 'sites' | 'aplicativos' | 'saas'
export type CaseBadge = 'real' | 'conceito'

export interface Case {
  slug: string
  title: string
  category: CaseCategory
  categoryLabel: string
  badge: CaseBadge
  glyph: string
  summary: string
  stack: string[]
  problema: string
  solucao: string
  resultado: string
  preview?: string
}

export const categoryFilters: { label: string; value: CaseCategory | 'todos' }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Sites', value: 'sites' },
  { label: 'Aplicativos', value: 'aplicativos' },
  { label: 'SaaS / Sistemas', value: 'saas' },
]

export const cases: Case[] = [
  {
    slug: 'rosa-carmen',
    title: 'Rosa Carmen',
    category: 'sites',
    categoryLabel: 'E-commerce',
    badge: 'real',
    glyph: 'rosa-carmen/storefront.tsx',
    summary:
      'Loja de presentes premium com checkout próprio, catálogo dinâmico e painel de gestão de pedidos.',
    stack: ['React', 'Supabase', 'Mercado Pago', 'Hostinger VPS'],
    problema:
      'Vendas 100% dependentes de DM no Instagram — sem catálogo pesquisável, sem checkout, sem dado de cliente.',
    solucao:
      'Loja própria com catálogo, checkout via Mercado Pago e painel de gestão de pedidos, hospedada em VPS próprio.',
    resultado:
      'Checkout funcional no ar em 18 dias, com fluxo de pedido e pagamento validado de ponta a ponta.',
    preview: '/mockups/rosa-carmen.html',
  },
  {
    slug: 'estudos-app',
    title: 'Estudos App',
    category: 'saas',
    categoryLabel: 'SaaS / Produto próprio',
    badge: 'real',
    glyph: 'estudos-app/notes.md',
    summary:
      'Sistema pessoal de notas de estudo com refinamento de conteúdo por IA, sincronizado via GitHub.',
    stack: ['Astro', 'TypeScript', 'Anthropic SDK'],
    problema:
      'Notas de estudo espalhadas em apps diferentes, sem estrutura, sem revisão de conteúdo e sem versionamento.',
    solucao:
      'Sistema próprio com editor estruturado, refinamento de texto assistido por IA e sincronização automática via GitHub.',
    resultado:
      'Fluxo de estudo centralizado, com histórico versionado de cada nota e revisão de conteúdo em segundos.',
    preview: '/mockups/estudos-app.html',
  },
  {
    slug: 'kanban-offline',
    title: 'Kanban Offline',
    category: 'aplicativos',
    categoryLabel: 'Aplicativo desktop',
    badge: 'real',
    glyph: 'kanban/board.electron',
    summary:
      'Gestor de tarefas desktop 100% offline, sem dependência de nuvem — dados sempre sob controle do usuário.',
    stack: ['Electron', 'React'],
    problema:
      'Ferramentas de kanban do mercado exigem conta na nuvem e assinatura, mesmo para uso pessoal e local.',
    solucao:
      'App desktop com Electron + React, banco de dados local, sem login e sem envio de dados para servidor externo.',
    resultado: 'Gestão de tarefas fluida, sem latência de rede e com dados 100% sob controle do usuário.',
    preview: '/mockups/kanban-offline.html',
  },
  {
    slug: 'forja',
    title: 'Forja',
    category: 'aplicativos',
    categoryLabel: 'Aplicativo mobile',
    badge: 'real',
    glyph: 'forja/workout.sqlite',
    summary: 'App de treino Android-first com banco local e sugestões de treino geradas por IA.',
    stack: ['Android', 'SQLite', 'Claude AI'],
    problema:
      'Apps de treino genéricos não adaptam a rotina ao histórico real de carga e frequência do usuário.',
    solucao:
      'App Android nativo com banco local SQLite e sugestões de progressão de treino geradas por IA a partir do histórico.',
    resultado:
      'Rotina de treino ajustada automaticamente a cada ciclo, sem depender de personal ou planilha manual.',
    preview: '/mockups/forja.html',
  },
  {
    slug: 'rede-varejo-local',
    title: 'Rede de Varejo Local',
    category: 'sites',
    categoryLabel: 'Site + material de marketing',
    badge: 'conceito',
    glyph: 'varejo/campanha.ads',
    summary:
      'Site institucional + geração automatizada de peças promocionais com preço e produto atualizados.',
    stack: ['React', 'Tailwind', 'IA generativa'],
    problema:
      'Redes de varejo local trocam preço e produto em campanha toda semana, mas dependem de designer para cada peça nova.',
    solucao:
      'Site institucional integrado a um gerador de peças promocionais por IA, que atualiza preço e produto automaticamente.',
    resultado:
      'Conceito validado para reduzir o tempo de produção de campanha de dias para minutos, sem depender de agência externa.',
    preview: '/mockups/rede-varejo-local.html',
  },
  {
    slug: 'gestao-financeira-igrejas',
    title: 'Gestão Financeira para Igrejas',
    category: 'saas',
    categoryLabel: 'Sistema / SaaS',
    badge: 'conceito',
    glyph: 'igreja/financeiro.sql',
    summary:
      'Sistema multiplataforma para controle de dízimos, ofertas e despesas, com app desktop e mobile.',
    stack: ['Supabase', 'Electron', 'Capacitor'],
    problema:
      'Controle financeiro de dízimos, ofertas e despesas ainda feito em planilha, sem histórico auditável nem acesso remoto.',
    solucao:
      'Sistema com backend Supabase, app desktop (Electron) para tesouraria e app mobile (Capacitor) para lançamento em campo.',
    resultado:
      'Conceito estruturado para dar a instituições religiosas controle financeiro auditável, com dado sincronizado entre dispositivos.',
    preview: '/mockups/gestao-financeira-igrejas.html',
  },
  {
    slug: 'theology',
    title: 'Theologia',
    category: 'aplicativos',
    categoryLabel: 'Aplicativo desktop',
    badge: 'real',
    glyph: 'theology/reader.electron',
    summary:
      'Leitor bíblico desktop com 17 versões, dicionário morfológico grego/hebraico, comentaristas clássicos e ilustrações geradas por IA.',
    stack: ['Electron', 'React', 'TypeScript', 'Claude AI'],
    problema:
      'Ferramentas de estudo bíblico sérias são pagas, desconexas e sem integração entre texto, léxico e comentário no mesmo lugar.',
    solucao:
      'App desktop com leitor de 17 versões, dicionário Strong integrado, comentários de Calvino, Henry e Spurgeon, e Galeria Sacra com ilustrações geradas por IA.',
    resultado:
      'Ambiente completo de estudo exegético, com léxico grego/hebraico e comentaristas clássicos acessíveis diretamente no texto.',
    preview: '/mockups/theology.html',
  },
]
