export type Locale = 'pt' | 'en';

export interface LocaleOption {
  readonly code: Locale;
  /** Short label shown in the switcher, e.g. "PT". */
  readonly label: string;
  /** Full language name, used for screen readers. */
  readonly name: string;
}

/** Interface copy that isn't part of the portfolio content itself. */
export interface UiText {
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly skipLink: string;
  readonly mainNav: string;
  readonly openMenu: string;
  readonly closeMenu: string;
  readonly backToTop: string;
  readonly languageLabel: string;
  readonly heroGreeting: string;
  readonly heroPrimaryCta: string;
  readonly heroSecondaryCta: string;
  readonly projectsEyebrow: string;
  readonly projectsTitle: string;
  readonly projectsDescription: string;
  readonly technologies: string;
  readonly viewLive: string;
  readonly viewCode: string;
  readonly seeAllTitle: string;
  readonly seeAllText: string;
  readonly seeAllCta: string;
  readonly allProjectsEyebrow: string;
  readonly allProjectsTitle: string;
  readonly allProjectsDescription: string;
  readonly backToHome: string;
  readonly experienceEyebrow: string;
  readonly experienceTitle: string;
  readonly experienceDescription: string;
  readonly experienceSeeAllTitle: string;
  readonly experienceSeeAllText: string;
  readonly experienceSeeAllCta: string;
  readonly allExperienceEyebrow: string;
  readonly allExperienceTitle: string;
  readonly allExperienceDescription: string;
  readonly educationEyebrow: string;
  readonly educationTitle: string;
  readonly skillsEyebrow: string;
  readonly skillsTitle: string;
  readonly skillsDescription: string;
  readonly contactEyebrow: string;
  readonly contactTitle: string;
  readonly contactText: string;
  readonly builtWith: string;
  readonly konamiReward: string;
}

export interface PortfolioData {
  readonly ui: UiText;
  readonly navLinks: readonly NavLink[];
  readonly profile: Profile;
  readonly projects: readonly Project[];
  readonly experiences: readonly Experience[];
  readonly education: readonly Education[];
  readonly skillGroups: readonly SkillGroup[];
  readonly contactLinks: readonly ContactLink[];
}

export type SpriteName = 'invader' | 'heart' | 'ghost' | 'pacman' | 'star' | 'trophy' | 'flag' | 'block';

export interface NavLink {
  readonly label: string;
  readonly anchor: string;
}

export interface ProfileFact {
  readonly label: string;
  readonly value: string;
}

export interface Profile {
  readonly name: string;
  readonly initials: string;
  readonly role: string;
  readonly location: string;
  readonly summary: readonly string[];
  readonly photoUrl: string;
  readonly photoAlt: string;
  readonly facts: readonly ProfileFact[];
}

export interface Project {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly year: number;
  readonly tags: readonly string[];
  readonly imageUrl: string;
  readonly imageAlt: string;
  /** Short label shown over the preview, e.g. "TCC". */
  readonly badge?: string;
  /** Featured projects span the full width of the grid. */
  readonly featured?: boolean;
  readonly highlightsTitle?: string;
  readonly highlights?: readonly string[];
  readonly repositoryUrl?: string;
  readonly liveUrl?: string;
}

export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface Education {
  readonly course: string;
  readonly institution: string;
  readonly period: string;
  readonly status: string;
  readonly description: string;
  readonly logoUrl: string;
  readonly logoAlt: string;
}

export interface SkillGroup {
  readonly category: string;
  readonly skills: readonly string[];
}

export type ContactIconName = 'email' | 'whatsapp' | 'github' | 'linkedin';

export interface ContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly icon: ContactIconName;
  readonly external: boolean;
}
