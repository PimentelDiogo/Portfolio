export type ProjectLink = { github?: string; demo?: string; playstore?: string }
export type FullDescription = { challenge: string; solution: string }
export type GalleryItem = { src: string; type: 'image' | 'video' }
export type Project = {
  id: string
  title: string
  subtitle: string
  shortDescription: string
  fullDescription: FullDescription
  techStack: string[]
  image: string
  gallery?: GalleryItem[]
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
    image: '/images/telemetry1.jpg',
    gallery: [
      { src: '/images/telemetry1.jpg', type: 'image' },
      { src: '/images/telemetry2.jpg', type: 'image' },
      { src: '/images/telemetry3.jpg', type: 'image' },
    ],
    links: { github: 'https://github.com/PimentelDiogo/gps_telemetry', demo: '#' }
  },
  {
    id: 'zaorec',
    title: 'zaoRec',
    subtitle: 'App de um instituto bíblico da igreja Zion',
    shortDescription: 'Plataforma para gestão educacional, permitindo a interação entre professores, alunos e diretores.',
    fullDescription: {
      challenge: 'Criar um fluxo onde professores, alunos e diretores consigam gerir notas, presença de aula, agenda e avisos.',
      solution: 'Hospedagem com Lovable, UI/UX gerada pela Lovable, mas gerenciamento de estado e arquitetura limpa mantidos pelo dev Diogo Pimentel.'
    },
    techStack: ['Lovable', 'React', 'Clean Architecture', 'State Management'],
    image: '/images/zao1.jpg',
    gallery: [
      { src: '/images/zao1.jpg', type: 'image' },
      { src: '/images/zao2.jpg', type: 'image' },
      { src: '/images/zao3.mp4', type: 'video' },
      { src: '/images/zao4.mp4', type: 'video' },
    ],
    links: { github: 'https://github.com/PimentelDiogo/zaorec', demo: 'https://zaorec.lovable.app/auth' }
  },
  {
    id: 'godash',
    title: 'Godash MV',
    subtitle: 'Acesso rápido aos painéis de BI hospitalar',
    shortDescription: 'Integração mobile ao BI garantindo maior mobilidade na gestão de dados da instituição.',
    fullDescription: {
      challenge: 'Integrar o app ao BI , sendo uma solução de acesso rápido aos painéis criados pelo hospital, garantindo maior interação na mobilidade da gestão de dados da instituição.',
      solution: 'Migrar do ionic para o flutter, trazendo graficos da syncfusion, usando BLoC com modular, e clean arch, integração com o gateway da MV.'
    },
    techStack: ['Flutter', 'Syncfusion', 'BLoC', 'Modular', 'Clean Architecture'],
    image: '/images/godas1.jpg',
    gallery: [
      { src: '/images/godas1.jpg', type: 'image' },
      { src: '/images/godash2.jpg', type: 'image' },
      { src: '/images/godash3.jpg', type: 'image' },
      { src: '/images/godash4.jpg', type: 'image' },
    ],
    links: { playstore: 'https://play.google.com/store/apps/details?id=br.com.mv.godashmv&hl=pt_BR' }
  },
  {
    id: 'deloitte-os',
    title: 'OS App Deloitte',
    subtitle: 'Sistema de gestão de ordens de serviço',
    shortDescription: 'Plataforma para gestão de equipamentos e ordens de serviço com alta segurança usando autenticação JWT.',
    fullDescription: {
      challenge: 'Sistema de gestão de equipamentos e ordens de serviço com autenticação JWT.',
      solution: 'Ionic 8 e .NET 10 para rapida integração de abertura e atendimento de ordens de serviço'
    },
    techStack: ['Ionic 8', 'Angular 19', '.NET 10', 'SQLite', 'Entity Framework Core', 'JWT', 'RxJS', 'SCSS'],
    image: '/images/os1.png',
    gallery: [
      { src: '/images/os1.png', type: 'image' },
      { src: '/images/os2.png', type: 'image' },
      { src: '/images/os3.png', type: 'image' },
      { src: '/images/os5.png', type: 'image' },
    ],
    links: { github: 'https://github.com/PimentelDiogo/ionic_deloitte' }
  },
  {
    id: 'dashpy',
    title: 'DashPy',
    subtitle: 'Painel visual para análise de tickets via Excel',
    shortDescription: 'Aplicativo Flutter para visualizar interativamente dados de tickets de arquivos Excel, com pesquisa por voz e audiodescrição.',
    fullDescription: {
      challenge: 'Carregamento e parsing de arquivos Excel. Visualização interativa de dados com gráficos de barras (carga de trabalho, solicitações e filas) e pizza (status). Funcionalidade de pesquisa por voz. Descrições em áudio dos dados dos gráficos. Design responsivo para diversos tamanhos de tela.',
      solution: 'Desenvolvido em Flutter (3.24+), com foco em acessibilidade de áudio, e um visual desacoplado e altamente intuitivo.'
    },
    techStack: ['Flutter', 'Excel Parsing', 'Data Visualization', 'Voice Search', 'Audio Accessibility', 'Responsive Design'],
    image: '/images/dashpy.jpg',
    gallery: [
      { src: '/images/dashpy.jpg', type: 'image' },
      { src: '/images/dashpyvideo.mp4', type: 'video' },
    ],
    links: { github: 'https://github.com/PimentelDiogo/dashFlutter' }
  }
]

export const getProjects = () => projects
export const getProject = (id: string) => projects.find(p => p.id === id)
