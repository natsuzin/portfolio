import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** A thumbnail in the stack: a screenshot, or a small text card when there's no image. */
export interface SeeAllPreview {
  readonly imageUrl?: string;
  readonly eyebrow?: string;
  readonly title?: string;
  readonly caption?: string;
}

/** Previews never fan out beyond this many cards. */
const MAX_PREVIEWS = 3;

/**
 * "See all" link: text on the left, previews flush with the section's right edge
 * and a dotted trail stretching between them.
 */
@Component({
  selector: 'app-see-all',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './see-all.html',
  styleUrl: './see-all.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeeAll {
  readonly link = input.required<string>();
  readonly title = input.required<string>();
  readonly cta = input.required<string>();
  readonly count = input.required<number>();
  readonly previews = input<readonly SeeAllPreview[]>([]);

  protected readonly thumbs = computed(() => this.previews().slice(0, MAX_PREVIEWS));
}
