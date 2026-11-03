import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SpriteName } from '../../../core/models/portfolio.models';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';
import { PixelSprite } from '../pixel-sprite/pixel-sprite';

@Component({
  selector: 'app-section-title',
  imports: [PixelSprite, RevealOnScroll],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-title" appReveal>
      <p class="section-title__eyebrow label-text">
        <app-pixel-sprite [sprite]="sprite()" [size]="14" />
        {{ eyebrow() }}
      </p>
      <h2 class="section-title__heading">{{ title() }}</h2>
      @if (description()) {
        <p class="section-title__description">{{ description() }}</p>
      }
    </div>
  `,
  styles: `
    .section-title {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 2.5rem;
    }
    .section-title__eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-accent);
    }
    /* Accent line that draws itself once the title enters the viewport */
    .section-title__eyebrow::after {
      content: '';
      width: 2.5rem;
      height: 1px;
      margin-left: 0.25rem;
      background: currentColor;
      transform-origin: left;
    }
    .section-title.is-visible .section-title__eyebrow::after {
      animation: draw-line 0.9s var(--ease-out) 0.35s backwards;
    }
    @keyframes draw-line {
      from {
        transform: scaleX(0);
      }
    }
    .section-title__heading {
      font-size: clamp(1.875rem, 4vw, 2.5rem);
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: -0.01em;
      text-wrap: balance;
    }
    .section-title__description {
      color: var(--color-muted);
    }
  `,
})
export class SectionTitle {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly sprite = input<SpriteName>('star');
  readonly description = input<string>('');
}
