import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { SectionNavigation } from '../../../core/services/section-navigation';

/**
 * Small pill that links to a section of the home page (e.g. a project's "Published in…"
 * badge pointing at #publications). Scrolls smoothly when the section is on the page.
 */
@Component({
  selector: 'app-section-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="section-badge label-text"
      [href]="href()"
      [attr.aria-label]="ariaLabel() || null"
      (click)="go($event)"
    >
      <!-- Journal page with text lines -->
      <svg class="section-badge__icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path
          d="M4 1.75h5.5L12.25 4.5v9.75H4z M9.5 1.75V4.5h2.75 M6 7.5h4 M6 10h4"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
      </svg>
      <span>{{ label() }}</span>
      <span class="section-badge__arrow" aria-hidden="true">&darr;</span>
    </a>
  `,
  styles: `
    :host {
      display: inline-flex;
    }
    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      min-height: 1.75rem;
      padding: 0.25rem 0.625rem;
      border: 1px solid color-mix(in srgb, var(--color-primary) 45%, transparent);
      border-radius: 999px;
      background: color-mix(in srgb, var(--color-primary) 12%, transparent);
      color: var(--color-primary);
      font-size: 0.6875rem;
      font-weight: 600;
      transition:
        transform 0.25s var(--ease-out),
        border-color 0.25s ease,
        background-color 0.25s ease;
    }
    .section-badge:hover,
    .section-badge:focus-visible {
      transform: translateY(-2px);
      border-color: var(--color-primary);
      background: color-mix(in srgb, var(--color-primary) 20%, transparent);
    }
    .section-badge:hover .section-badge__arrow,
    .section-badge:focus-visible .section-badge__arrow {
      transform: translateY(2px);
    }
    .section-badge__icon {
      width: 0.875rem;
      height: 0.875rem;
      flex-shrink: 0;
    }
    .section-badge__arrow {
      display: inline-block;
      transition: transform 0.3s var(--ease-out);
    }
  `,
})
export class SectionBadge {
  private readonly sections = inject(SectionNavigation);

  /** Id of the target section, without "#". */
  readonly anchor = input.required<string>();
  readonly label = input.required<string>();
  /** Descriptive name for screen readers; should start with the visible label. */
  readonly ariaLabel = input('');

  protected readonly href = computed(() => this.sections.href(this.anchor()));

  protected go(event: MouseEvent): void {
    this.sections.go(event, this.anchor());
  }
}
