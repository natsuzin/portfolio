import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

import { CONTENT_EN } from '../data/content.en';
import { CONTENT_PT } from '../data/content.pt';
import { Locale, LocaleOption, PortfolioData } from '../models/portfolio.models';

const CONTENT: Record<Locale, PortfolioData> = { pt: CONTENT_PT, en: CONTENT_EN };
const STORAGE_KEY = 'portfolio-locale';
const HTML_LANG: Record<Locale, string> = { pt: 'pt-BR', en: 'en' };

/**
 * Single source of truth for portfolio content, in the active language.
 * Every piece of content is a signal, so switching the locale updates the whole page.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioContent {
  private readonly document = inject(DOCUMENT);

  readonly locales: readonly LocaleOption[] = [
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'en', label: 'EN', name: 'English' },
  ];

  readonly locale = signal<Locale>(this.detectInitialLocale());

  private readonly data = computed(() => CONTENT[this.locale()]);

  readonly ui = computed(() => this.data().ui);
  readonly profile = computed(() => this.data().profile);
  readonly projects = computed(() => this.data().projects);
  readonly experiences = computed(() => this.data().experiences);
  readonly education = computed(() => this.data().education);
  /** Most recent first, whatever the order in the data file. */
  readonly publications = computed(() =>
    [...this.data().publications].sort((a, b) => b.year - a.year),
  );
  readonly skillGroups = computed(() => this.data().skillGroups);
  readonly contactLinks = computed(() => this.data().contactLinks);

  /** Hides the "Projects" and "Publications" links while those lists are empty. */
  readonly navLinks = computed(() => {
    const { navLinks, projects, publications } = this.data();
    return navLinks.filter(
      (link) =>
        (link.anchor !== 'projetos' || projects.length > 0) &&
        (link.anchor !== 'publications' || publications.length > 0),
    );
  });

  constructor() {
    // Keeps <html lang>, the tab title and the meta description in sync
    effect(() => {
      const locale = this.locale();
      const { metaTitle, metaDescription } = this.data().ui;

      this.document.documentElement.lang = HTML_LANG[locale];
      this.document.title = metaTitle;
      this.document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', metaDescription);
    });
  }

  setLocale(locale: Locale): void {
    this.locale.set(locale);
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Storage may be unavailable (private mode); the choice just won't persist
    }
  }

  /** Saved choice first, then the visitor's browser language; English otherwise. */
  private detectInitialLocale(): Locale {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore and fall back to the browser language
    }

    const browserLanguage = typeof navigator === 'undefined' ? '' : navigator.language;
    return browserLanguage.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
}
