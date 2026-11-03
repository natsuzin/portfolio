import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-education',
  imports: [SectionTitle, RevealOnScroll],
  templateUrl: './education.html',
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  private readonly content = inject(PortfolioContent);

  protected readonly education = this.content.education;
  protected readonly ui = this.content.ui;
}
