import { DOCUMENT, Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Links to sections of the home page ("#formacao", "#publications"…) from anywhere in the app.
 * Keeps real hrefs (so "open in new tab" still works) and scrolls smoothly when the section
 * is already on the page, otherwise navigates home and lands on it.
 */
@Injectable({ providedIn: 'root' })
export class SectionNavigation {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  /** Real URL of the section, e.g. "/#publications" (respects the base href). */
  href(anchor: string): string {
    const tree = this.router.createUrlTree(['/'], { fragment: anchor });
    return this.location.prepareExternalUrl(this.router.serializeUrl(tree));
  }

  /**
   * Handles a click on a section link. Modified clicks (new tab, new window…) are left to the
   * browser. Returns true when the click was handled.
   */
  go(event: MouseEvent, anchor: string): boolean {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return false;
    }
    event.preventDefault();

    const target = this.document.getElementById(anchor);
    if (target) {
      // Smoothness comes from `scroll-behavior` in the global styles (off for reduced motion)
      target.scrollIntoView();
    } else {
      this.router.navigate(['/'], { fragment: anchor });
    }
    return true;
  }
}
