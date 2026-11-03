import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { Locale } from '../../core/models/portfolio.models';
import { PortfolioContent } from '../../core/services/portfolio-content';

const SCROLL_THRESHOLD_PX = 12;
/** A section becomes "active" once its top passes this fraction of the viewport. */
const ACTIVE_SECTION_LINE = 0.35;
const BACK_TO_TOP_RATIO = 0.8;

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '(window:resize)': 'onWindowScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  private readonly content = inject(PortfolioContent);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private frameId = 0;
  /** Path of the current sub-page (e.g. "projetos"), empty on the home page. */
  private subpage = '';

  protected readonly links = this.content.navLinks;
  protected readonly profile = this.content.profile;
  protected readonly ui = this.content.ui;
  protected readonly locale = this.content.locale;
  protected readonly locales = this.content.locales;
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly activeSection = signal(this.links()[0]?.anchor ?? '');
  protected readonly scrollProgress = signal(0);
  protected readonly showBackToTop = signal(false);

  constructor() {
    afterNextRender(() => this.updateScrollState());
    inject(DestroyRef).onDestroy(() => cancelAnimationFrame(this.frameId));

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        this.subpage = this.router.url.split(/[?#]/)[0].slice(1);
        this.closeMenu();
        this.onWindowScroll();
      });
  }

  /** Real URL for each link, so "open in new tab" and middle-click keep working. */
  protected sectionHref(anchor: string): string {
    const tree = this.router.createUrlTree(['/'], { fragment: anchor });
    return this.location.prepareExternalUrl(this.router.serializeUrl(tree));
  }

  /**
   * Scrolls to the section if it exists on the current page (e.g. the footer),
   * otherwise goes back to the home page and lands on it.
   */
  protected goToSection(event: MouseEvent, anchor: string): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    this.closeMenu();

    const target = document.getElementById(anchor);
    if (target) {
      target.scrollIntoView();
    } else {
      this.router.navigate(['/'], { fragment: anchor });
    }
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected setLocale(locale: Locale): void {
    this.content.setLocale(locale);
  }

  /** Batches scroll work into one update per animation frame. */
  protected onWindowScroll(): void {
    if (this.frameId) {
      return;
    }
    this.frameId = requestAnimationFrame(() => {
      this.frameId = 0;
      this.updateScrollState();
    });
  }

  private updateScrollState(): void {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    this.isScrolled.set(scrollY > SCROLL_THRESHOLD_PX);
    this.scrollProgress.set(maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0);
    this.showBackToTop.set(scrollY > window.innerHeight * BACK_TO_TOP_RATIO);
    this.activeSection.set(this.findActiveSection(scrollY, maxScroll));
  }

  private findActiveSection(scrollY: number, maxScroll: number): string {
    const links = this.links();
    // At the very bottom the last section (contact) may be too short to reach the line
    const atBottom = maxScroll > 0 && maxScroll - scrollY < 4;

    if (atBottom) {
      return links.at(-1)?.anchor ?? '';
    }
    // Sub-pages share their path with the matching section anchor
    if (this.subpage) {
      return this.subpage;
    }

    const activationLine = window.innerHeight * ACTIVE_SECTION_LINE;
    let current = links[0]?.anchor ?? '';

    for (const link of links) {
      const section = document.getElementById(link.anchor);
      if (section && section.getBoundingClientRect().top <= activationLine) {
        current = link.anchor;
      }
    }
    return current;
  }
}
