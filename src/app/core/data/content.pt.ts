import { PortfolioData } from '../models/portfolio.models';

export const CONTENT_PT: PortfolioData = {
  ui: {
    metaTitle: 'Nathalia Suzin · Portfólio',
    metaDescription:
      'Portfólio de Nathalia Suzin, desenvolvedora front-end em Florianópolis: projetos, experiência profissional, formação e habilidades.',
    skipLink: 'Pular para o conteúdo',
    mainNav: 'Navegação principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    backToTop: 'Voltar ao topo',
    languageLabel: 'Idioma',
    heroGreeting: 'Olá, eu sou',
    heroPrimaryCta: 'Ver trajetória',
    heroSecondaryCta: 'Fale comigo',
    projectsEyebrow: 'Projetos',
    projectsTitle: 'O que eu construí',
    projectsDescription: 'Projetos profissionais, acadêmicos e pessoais que desenvolvi.',
    technologies: 'Tecnologias',
    viewLive: 'Ver online',
    viewCode: 'Código no GitHub',
    seeAllTitle: 'Quer ver mais?',
    seeAllText: 'Confira todos os projetos em uma página só.',
    seeAllCta: 'Ver todos os projetos',
    allProjectsEyebrow: 'Portfólio',
    allProjectsTitle: 'Todos os projetos',
    allProjectsDescription:
      'Projetos profissionais, acadêmicos e pessoais.',
    backToHome: 'Voltar ao início',
    experienceEyebrow: 'Trajetória',
    experienceTitle: 'Experiência profissional',
    experienceDescription: 'Por onde passei e minhas contribuições.',
    experienceSeeAllTitle: 'Trajetória completa',
    experienceSeeAllText: 'Veja todas as experiências, desde o meu primeiro emprego.',
    experienceSeeAllCta: 'Ver todas as experiências',
    allExperienceEyebrow: 'Trajetória',
    allExperienceTitle: 'Toda a experiência profissional',
    allExperienceDescription: 'Do primeiro emprego ao trabalho atual, por onde passei e o que construí em cada etapa.',
    educationEyebrow: 'Formação',
    educationTitle: 'Formação acadêmica',
    skillsEyebrow: 'Stack',
    skillsTitle: 'Habilidades',
    skillsDescription: 'Tecnologias, ferramentas e métodos.',
    contactEyebrow: 'Contato',
    contactTitle: 'Vamos conversar?',
    contactText:
      'Estou aberta a novas oportunidades e colaborações.',
    builtWith: 'Feito com Angular.',
  },

  navLinks: [
    { label: 'Início', anchor: 'inicio' },
    { label: 'Projetos', anchor: 'projetos' },
    { label: 'Experiência', anchor: 'experiencia' },
    { label: 'Formação', anchor: 'formacao' },
    { label: 'Habilidades', anchor: 'habilidades' },
    { label: 'Contato', anchor: 'contato' },
  ],

  profile: {
    name: 'Nathalia Suzin',
    initials: 'NAT',
    role: 'Desenvolvedora Front-end · UI/UX',
    location: 'Florianópolis, SC',
    summary: [
      'Desenvolvo sistemas internos na ID Energy do planejamento ao código, com um cuidado especial pelas interfaces.',
      'Enquanto concluo Ciência da Computação na UNIVALI, sigo buscando desafios que me façam aprender algo novo.',
    ],
    photoUrl: 'images/nathalia.jpg',
    photoAlt: 'Foto de Nathalia Suzin sorrindo, de camisa branca, em um evento acadêmico',
    facts: [
      { label: 'Atualmente', value: 'Dev Júnior na ID Energy' },
      { label: 'Formação', value: 'Ciência da Computação · UNIVALI' },
      { label: 'Idiomas', value: 'Português nativo · Inglês avançado' },
    ],
  },

  /**
   * Projetos exibidos na seção "Projetos". Se a lista ficar vazia,
   * a seção e o link no menu são ocultados automaticamente.
   */
  projects: [
    {
      title: 'ÆRIS',
      subtitle: 'Simulador RISC-V Educacional Avançado',
      description:
        'Simulador web para o ensino da arquitetura RISC-V (RV32I): permite escrever, montar e executar código em linguagem de montagem direto no navegador. Minha contribuição foi o desenvolvimento de um painel gráfico, tema do meu TCC.',
      year: 2026,
      badge: 'TCC',
      featured: true,
      highlightsTitle: 'Painel Gráfico Interativo',
      highlights: [
        'Grid de 32 × 18 pixels controlado por E/S mapeada em memória: escritas no framebuffer viram saída visual',
        'Modo Interativo com registrador de teclado, permitindo programas que respondem ao usuário em tempo real',
        'Integração em paralelo ao núcleo do simulador, sem alterar o analisador, o montador ou o motor de execução',
        'Roteiro prático em seis etapas, do primeiro pixel aceso até um jogo Snake escrito inteiramente em assembly',
      ],
      tags: ['Angular', 'TypeScript', 'RISC-V', 'SCSS'],
      imageUrl: 'images/projects/aeris.webp',
      imageAlt:
        'Interface do ÆRIS com o Painel Gráfico exibindo uma cobra verde e uma comida vermelha desenhadas por um programa RISC-V, ao lado da tabela de registradores',
      repositoryUrl: 'https://github.com/xarc/aeris',
      liveUrl: 'https://xarc.org/aeris/develop/',
    },
    {
      title: 'ID Energy',
      subtitle: 'Sistema de gestão de energia',
      description:
        'Plataforma web que substitui planilhas na gestão de faturas de energia elétrica, consumo e geração distribuída: cadastro de clientes, unidades consumidoras e usinas, controle e distribuição de créditos de energia, relatórios em PDF, dashboard e auditoria. Em produção, usada pela equipe interna e pelos clientes.',
      year: 2025,
      badge: 'Profissional',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
      imageUrl: 'images/projects/idenergy.webp',
      imageAlt:
        'Tela de login do sistema da ID Energy, com o logotipo à esquerda e o formulário de e-mail e senha à direita, sobre uma foto de painéis solares',
      repositoryUrl: 'https://github.com/IDEnergy-br',
      liveUrl: 'https://sistema.idenergy.com.br/',
    },
    {
      title: 'ENADE Sim',
      subtitle: 'Simulado do ENADE de Ciência da Computação',
      description:
        'Simulador web das provas do ENADE com questões reais (2014, 2017 e 2021), cronômetro de 4 horas, correção comentada, autoavaliação das discursivas, exportação do resultado e histórico de evolução salvo no navegador. Criado para ajudar estudantes de computação a se prepararem para a prova.',
      year: 2026,
      tags: ['Angular 19', 'TypeScript', 'Signals', 'localStorage'],
      imageUrl: 'images/projects/enade-sim.webp',
      imageAlt:
        'Tela inicial do ENADE Sim com o resumo do novo simulado, 40 questões em 4 horas, e o quadro de evolução',
      repositoryUrl: 'https://github.com/natsuzin/enade-sim',
      liveUrl: 'https://natsuzin.github.io/enade-sim/',
    },
    {
      title: 'Perfect Valley',
      subtitle: 'Rastreador de Perfeição para Stardew Valley',
      description:
        'Criado para acompanhar a progressão no jogo Stardew Valley: uma fazenda 3D em pixel art que reflete o seu progresso, com construções clicáveis para cada categoria, estações, ciclo de dia e noite, versão em português e inglês e importação do save do jogo.',
      year: 2026,
      tags: ['JavaScript', 'Three.js', 'Vite', 'Vitest'],
      imageUrl: 'images/projects/perfect-valley.webp',
      imageAlt:
        'Fazenda 3D em pixel art do Perfect Valley, com casa, celeiro, lago, lavoura e mina sobre uma ilha flutuante',
      repositoryUrl: 'https://github.com/By2Two/perfect-valley',
      liveUrl: 'https://by2two.github.io/perfect-valley/',
    },
  ],

  experiences: [
    {
      role: 'Desenvolvedora de Software Júnior',
      company: 'ID Energy',
      location: 'São José, SC · Híbrido · Meio período',
      period: 'Fev 2025 — Atual',
      description:
        'Responsável pelo desenvolvimento e implantação de uma nova solução de software, liderando todo o processo de planejamento e desenho da arquitetura.',
      highlights: [
        'Planejamento e desenho da arquitetura com foco em performance, segurança e manutenibilidade',
        'Estruturação e otimização do banco de dados (PostgreSQL) para garantir integridade e alto desempenho',
        'Prototipação de telas no Figma com foco em UI/UX e interfaces funcionais e intuitivas',
        'Desenvolvimento de softwares internos e ferramentas de automação para otimizar processos do negócio',
        'Documentação contínua do desenvolvimento para garantir escalabilidade e manutenção a longo prazo',
      ],
    },
    {
      role: 'Estagiária de Qualidade de Software (QA)',
      company: 'Intelbras',
      location: 'São José, SC · Presencial · Estágio',
      period: 'Jun 2023 — Fev 2025',
      description:
        'Atuei na Squad Desktop, contribuindo para a qualidade e a confiabilidade dos produtos de software.',
      highlights: [
        'Execução e documentação de testes manuais e automatizados',
        'Identificação e reporte detalhado de bugs e problemas encontrados',
        'Manutenção e atualização da documentação e dos manuais de teste',
        'Apoio na configuração e manutenção do ambiente de testes e da rede',
        'Suporte à automação de testes para otimizar os processos de validação',
      ],
    },
    {
      role: 'Assistente Administrativa',
      company: 'Komgroup Industrial Ltda',
      location: 'Palhoça, SC · Presencial · Tempo integral',
      period: 'Fev 2022 — Mai 2023',
      description:
        'Atuei na recepção e no setor administrativo, garantindo a organização e a eficiência dos processos internos.',
      highlights: [
        'Atendimento ao cliente e suporte administrativo, presencial e online',
        'Gestão de correspondências, impostos (IPTU e taxas veiculares) e despesas da empresa',
        'Controle e organização de documentos administrativos no TOTVS Protheus',
        'Apoio na organização de processos internos e do fluxo de informações',
      ],
    },
    {
      role: 'Jovem Aprendiz de RH',
      company: 'Komgroup Industrial Ltda',
      location: 'Palhoça, SC · Presencial · Meio período',
      period: 'Nov 2020 — Fev 2022',
      description:
        'Atuei na área de Gestão de Pessoas, garantindo a organização e a conformidade dos processos internos.',
      highlights: [
        'Registro e atualização de documentos no portal TOTVS',
        'Organização e distribuição de uniformes e crachás para colaboradores',
        'Coleta de assinaturas e gestão de folhas de ponto e documentos internos',
        'Organização e manutenção de arquivos físicos e digitais para conformidade com a ISO 9001',
      ],
    },
  ],

  education: [
    {
      course: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade do Vale do Itajaí (UNIVALI)',
      period: 'Fev 2021 — 2027/1',
      status: 'Em andamento',
      description: 'Formatura prevista para o 1º semestre de 2027.',
      logoUrl: 'images/univali.png',
      logoAlt: 'Logo da UNIVALI',
    },
  ],

  skillGroups: [
    { category: 'Linguagens', skills: ['JavaScript', 'TypeScript', 'Java', 'C#'] },
    { category: 'Front-end', skills: ['Angular', 'React', 'HTML', 'CSS'] },
    { category: 'Banco de dados', skills: ['PostgreSQL', 'MySQL'] },
    { category: 'Ferramentas', skills: ['Git', 'GitHub', 'Figma', 'Postman'] },
    { category: 'Gestão de projetos', skills: ['Scrum', 'Kanban', 'Agile', 'Jira', 'Confluence'] },
    { category: 'Idiomas', skills: ['Português (nativo)', 'Inglês (avançado)'] },
  ],

  contactLinks: [
    {
      label: 'Currículo',
      value: 'Baixar PDF',
      href: 'curriculo/nathalia-suzin-pt.pdf',
      icon: 'resume',
      external: true,
    },
    {
      label: 'E-mail',
      value: 'natsuzin22@gmail.com',
      href: 'mailto:natsuzin22@gmail.com',
      icon: 'email',
      external: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/natsuzin',
      href: 'https://github.com/natsuzin',
      icon: 'github',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/nathalia-suzin',
      href: 'https://www.linkedin.com/in/nathalia-suzin',
      icon: 'linkedin',
      external: true,
    },
  ],
};
