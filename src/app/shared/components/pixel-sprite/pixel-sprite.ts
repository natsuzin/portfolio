import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { SpriteName } from '../../../core/models/portfolio.models';
import { SPRITE_COLORS, SPRITE_PATTERNS } from './sprite-patterns';

interface Pixel {
  readonly x: number;
  readonly y: number;
  readonly fill: string;
}

@Component({
  selector: 'app-pixel-sprite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pixel-sprite',
    '[style.width.px]': 'size()',
    '[attr.aria-hidden]': 'label() ? null : "true"',
    '[attr.role]': 'label() ? "img" : null',
    '[attr.aria-label]': 'label()',
  },
  template: `
    <svg [attr.viewBox]="viewBox()" shape-rendering="crispEdges" focusable="false">
      @for (pixel of pixels(); track $index) {
        <rect [attr.x]="pixel.x" [attr.y]="pixel.y" width="1" height="1" [attr.fill]="pixel.fill" />
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-block;
      line-height: 0;
      flex-shrink: 0;
    }
    svg {
      width: 100%;
      height: auto;
    }
  `,
})
export class PixelSprite {
  readonly sprite = input.required<SpriteName>();
  readonly size = input(24);
  readonly label = input<string | null>(null);

  private readonly pattern = computed(() => SPRITE_PATTERNS[this.sprite()]);

  protected readonly viewBox = computed(() => {
    const rows = this.pattern();
    return `0 0 ${rows[0].length} ${rows.length}`;
  });

  protected readonly pixels = computed<Pixel[]>(() =>
    this.pattern().flatMap((row, y) =>
      [...row].flatMap((char, x) => {
        const fill = SPRITE_COLORS[char];
        return fill ? [{ x, y, fill }] : [];
      }),
    ),
  );
}
