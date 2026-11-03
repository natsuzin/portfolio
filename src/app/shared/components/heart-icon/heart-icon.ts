import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Smooth, filled heart in the accent color. */
@Component({
  selector: 'app-heart-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-hidden': 'true',
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
  },
  template: `
    <svg viewBox="0 0 24 24" focusable="false">
      <path
        class="heart__body"
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      />
      <!-- Glossy highlight on the upper-left lobe -->
      <path class="heart__shine" d="M5.1 9.6c-.2-1.6.8-3.1 2.4-3.5" />
      <circle class="heart__sparkle" cx="9.6" cy="6.3" r="0.95" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-block;
      flex-shrink: 0;
      line-height: 0;
      color: var(--color-accent);
    }
    svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .heart__body {
      fill: currentColor;
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linejoin: round;
    }
    .heart__shine {
      fill: none;
      stroke: #fff;
      stroke-width: 2;
      stroke-linecap: round;
      opacity: 1;
    }
    .heart__sparkle {
      fill: #fff;
      opacity: 1;
    }
  `,
})
export class HeartIcon {
  readonly size = input(24);
}
