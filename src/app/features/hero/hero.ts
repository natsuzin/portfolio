import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { HeartIcon } from '../../shared/components/heart-icon/heart-icon';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, HeartIcon, RevealOnScroll],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly content = inject(PortfolioContent);

  protected readonly profile = this.content.profile;
  protected readonly ui = this.content.ui;
}
