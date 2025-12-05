export type ProjectLink = { github?: string; demo?: string }
export type FullDescription = { challenge: string; solution: string }
export type Project = {
  id: string
  title: string
  subtitle: string
  shortDescription: string
  fullDescription: FullDescription
  techStack: string[]
  image: string
  links: ProjectLink
}

export const projects: Project[] = [
  {
    id: 'drivesense',
    title: 'DriveSense Telemetry',
    subtitle: 'Monitoramento veicular offline-first',
    shortDescription: 'Aplicação mobile para coleta, processamento e visualização de dados de sensores (GPS, Acelerômetro) com alta eficiência energética.',
    fullDescription: {
      challenge: 'Coletar dados de múltiplos sensores (GPS, Acelerômetro) em alta frequência para gerar relatórios de direção, sem drenar a bateria e garantindo integridade de dados em zonas sem sinal (zonas de sombra).',
      solution: 'Utilizei Dart Isolates para processar cálculos matemáticos fora da thread principal (UI). Implementei arquitetura Offline-First com SQLite e um sistema de fila (Queue) que sincroniza com a API apenas quando há conexão estável (batch upload).'
    },
    techStack: ['Flutter', 'Dart Isolates', 'SQLite', 'Google Maps API', 'Firebase'],
    image: '/images/drivesense-mockup.svg',
    links: { github: '#', demo: '#' }
  },
  {
    id: 'fintrack',
    title: 'FinTrack',
    subtitle: 'Controle Financeiro Pessoal',
    shortDescription: 'Gestão de despesas e receitas com gráficos interativos e definição de metas financeiras inteligentes.',
    fullDescription: {
      challenge: 'Criar uma experiência fluida para lançamento rápido de despesas, incentivando o uso diário pelo usuário.',
      solution: 'Foco total em UX/UI com animações de micro-interação. Implementação de gráficos nativos para visualização de gastos por categoria em tempo real.'
    },
    techStack: ['Flutter', 'Dart', 'Clean Architecture', 'Local Auth'],
    image: '/images/fintrack-mockup.svg',
    links: { github: '#', demo: '#' }
  }
]

export const getProjects = () => projects
export const getProject = (id: string) => projects.find(p => p.id === id)
