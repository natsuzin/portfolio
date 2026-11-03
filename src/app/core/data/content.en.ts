import { PortfolioData } from '../models/portfolio.models';
import { CONTENT_PT } from './content.pt';

/** Values that are identical in every language (URLs, images, names). */
const [AERIS_PT, IDENERGY_PT, ENADE_PT, VALLEY_PT] = CONTENT_PT.projects;

export const CONTENT_EN: PortfolioData = {
  ui: {
    metaTitle: 'Nathalia Suzin · Portfolio',
    metaDescription:
      'Portfolio of Nathalia Suzin, front-end developer in Florianópolis, Brazil: projects, work experience, education and skills.',
    skipLink: 'Skip to content',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
    languageLabel: 'Language',
    heroGreeting: "Hi, I'm",
    heroPrimaryCta: 'See my journey',
    heroSecondaryCta: 'Get in touch',
    projectsEyebrow: 'Projects',
    projectsTitle: "What I've built",
    projectsDescription: "Professional, academic and personal projects I've developed.",
    technologies: 'Technologies',
    viewLive: 'View live',
    viewCode: 'Code on GitHub',
    seeAllTitle: 'Want to see more?',
    seeAllText: 'Browse every project on a single page.',
    seeAllCta: 'See all projects',
    allProjectsEyebrow: 'Portfolio',
    allProjectsTitle: 'All projects',
    allProjectsDescription:
      'Professional, academic and personal projects.',
    backToHome: 'Back to home',
    experienceEyebrow: 'Journey',
    experienceTitle: 'Work experience',
    experienceDescription: "Where I've been and how I contributed.",
    experienceSeeAllTitle: 'Full journey',
    experienceSeeAllText: 'See every role, all the way back to my first job.',
    experienceSeeAllCta: 'See all experience',
    allExperienceEyebrow: 'Journey',
    allExperienceTitle: 'All work experience',
    allExperienceDescription: "From my first job to my current role: where I've been and what I built at each step.",
    educationEyebrow: 'Education',
    educationTitle: 'Academic background',
    skillsEyebrow: 'Stack',
    skillsTitle: 'Skills',
    skillsDescription: 'Technologies, tools and methods.',
    contactEyebrow: 'Contact',
    contactTitle: "Let's talk",
    contactText:
      "I'm open to new opportunities and collaborations.",
    builtWith: 'Built with Angular.',
  },

  navLinks: [
    { label: 'Home', anchor: 'inicio' },
    { label: 'Projects', anchor: 'projetos' },
    { label: 'Experience', anchor: 'experiencia' },
    { label: 'Education', anchor: 'formacao' },
    { label: 'Skills', anchor: 'habilidades' },
    { label: 'Contact', anchor: 'contato' },
  ],

  profile: {
    ...CONTENT_PT.profile,
    role: 'Front-end Developer · UI/UX',
    location: 'Florianópolis, Brazil',
    summary: [
      'At ID Energy, I plan, architect and build new internal software, with a focus on thoughtful interfaces.',
      "I'm driven by learning and taking on new challenges. I'm finishing my Bachelor's degree in Computer Science at UNIVALI, graduating in the first semester of 2027.",
    ],
    photoAlt: 'Photo of Nathalia Suzin smiling, wearing a white shirt, at an academic event',
    facts: [
      { label: 'Currently', value: 'Junior Developer at ID Energy' },
      { label: 'Education', value: 'Computer Science · UNIVALI' },
      { label: 'Languages', value: 'Native Portuguese · Advanced English' },
    ],
  },

  projects: [
    {
      ...AERIS_PT,
      subtitle: 'Advanced Educational RISC-V Simulator',
      description:
        'A web simulator for teaching the RISC-V architecture (RV32I): write, assemble and run assembly code right in the browser. My contribution was developing a graphics panel, the topic of my thesis.',
      badge: 'Thesis',
      highlightsTitle: 'Interactive Graphics Panel',
      highlights: [
        '32 × 18 pixel grid driven by memory-mapped I/O: writes to the framebuffer become visual output',
        'Interactive Mode with a keyboard register, enabling programs that respond to the user in real time',
        'Runs alongside the simulator core without changing the parser, the assembler or the execution engine',
        'Six-step hands-on guide, from lighting up the first pixel to a Snake game written entirely in assembly',
      ],
      imageAlt:
        'ÆRIS interface with the Graphics Panel showing a green snake and red food drawn by a RISC-V program, next to the register table',
    },
    {
      ...IDENERGY_PT,
      subtitle: 'Energy management system',
      description:
        'A web platform that replaces spreadsheets for managing electricity bills, consumption and distributed generation: clients, consumer units and power plants, energy credit tracking and allocation, PDF reports, a dashboard and an audit log. In production, used by the internal team and by clients.',
      badge: 'Work',
      imageAlt:
        'ID Energy system login screen, with the logo on the left and the email and password form on the right, over a photo of solar panels',
    },
    {
      ...ENADE_PT,
      subtitle: "Practice tests for ENADE, Brazil's national Computer Science exam",
      description:
        'A web simulator of ENADE exams with real questions (2014, 2017 and 2021), a 4-hour timer, explained answers, self-assessment for written questions, result export and a progress history saved in the browser. Built to help computing students prepare for the exam.',
      imageAlt:
        'ENADE Sim home screen with the new practice test summary, 40 questions in 4 hours, and the progress panel',
    },
    {
      ...VALLEY_PT,
      subtitle: 'Perfection tracker for Stardew Valley',
      description:
        'Built to track progress in Stardew Valley: a 3D pixel-art farm that reflects how far you are, with clickable buildings for each category, seasons, a day and night cycle, English and Portuguese versions, and save-file import.',
      imageAlt:
        'Perfect Valley 3D pixel-art farm with a house, barn, pond, crops and a mine on a floating island',
    },
  ],

  experiences: [
    {
      role: 'Junior Software Developer',
      company: 'ID Energy',
      location: 'São José, Brazil · Hybrid · Part-time',
      period: 'Feb 2025 — Present',
      description:
        'Responsible for developing and deploying a new software solution, leading the entire planning and architectural design process.',
      highlights: [
        'Planning and designing the software architecture with a focus on performance, security and maintainability',
        'Structuring and optimizing the database (PostgreSQL) to ensure data integrity and high performance',
        'Creating screen prototypes in Figma with a focus on UI/UX and functional, intuitive interfaces',
        'Developing internal software and automation tools to optimize business processes',
        'Continuously documenting the development process to ensure scalability and long-term maintainability',
      ],
    },
    {
      role: 'Software Quality Assurance Intern',
      company: 'Intelbras',
      location: 'São José, Brazil · On-site · Internship',
      period: 'Jun 2023 — Feb 2025',
      description:
        'Worked in the Desktop Squad, contributing to the quality and reliability of software products.',
      highlights: [
        'Running and documenting manual and automated tests',
        'Identifying and reporting bugs and issues in detail',
        'Maintaining and updating test documentation and manuals',
        'Helping configure and maintain the test environment and network',
        'Supporting test automation to streamline validation processes',
      ],
    },
    {
      role: 'Administrative Assistant',
      company: 'Komgroup Industrial Ltda',
      location: 'Palhoça, Brazil · On-site · Full-time',
      period: 'Feb 2022 — May 2023',
      description:
        'Worked at the front desk and in the administrative department, keeping internal processes organized and efficient.',
      highlights: [
        'Customer service and administrative support, in person and online',
        'Managing mail, taxes (property tax and vehicle fees) and company expenses',
        'Controlling and organizing administrative documents in TOTVS Protheus',
        'Supporting the organization of internal processes and information flow',
      ],
    },
    {
      role: 'HR Apprentice',
      company: 'Komgroup Industrial Ltda',
      location: 'Palhoça, Brazil · On-site · Part-time',
      period: 'Nov 2020 — Feb 2022',
      description:
        'Worked in People Management, keeping internal processes organized and compliant.',
      highlights: [
        'Recording and updating documents in the TOTVS portal',
        'Organizing and distributing uniforms and badges to employees',
        'Collecting signatures and managing timesheets and internal documents',
        'Organizing and maintaining physical and digital files for ISO 9001 compliance',
      ],
    },
  ],

  education: [
    {
      ...CONTENT_PT.education[0],
      course: "Bachelor's Degree in Computer Science",
      institution: 'University of Vale do Itajaí (UNIVALI)',
      period: 'Feb 2021 — 1st sem. 2027',
      status: 'In progress',
      description: 'Expected graduation in the first semester of 2027.',
      logoAlt: 'UNIVALI logo',
    },
  ],

  skillGroups: [
    { category: 'Programming languages', skills: ['JavaScript', 'TypeScript', 'Java', 'C#'] },
    { category: 'Front-end', skills: ['Angular', 'React', 'HTML', 'CSS'] },
    { category: 'Databases', skills: ['PostgreSQL', 'MySQL'] },
    { category: 'Tools', skills: ['Git', 'GitHub', 'Figma', 'Postman'] },
    { category: 'Project management', skills: ['Scrum', 'Kanban', 'Agile', 'Jira', 'Confluence'] },
    { category: 'Languages', skills: ['Portuguese (native)', 'English (advanced)'] },
  ],

  contactLinks: CONTENT_PT.contactLinks.map((link) =>
    link.label === 'E-mail' ? { ...link, label: 'Email' } : link,
  ),
};
