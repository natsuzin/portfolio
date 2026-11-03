import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { ExperienceTimeline } from '../../shared/components/experience-timeline/experience-timeline';
import { SectionTitle } from '../../shared/components/section-title/section-title';

/** Full work history. */
@Component({
  selector: 'app-experience-page',
  imports: [RouterLink, ExperienceTimeline, SectionTitle],
  templateUrl: './experience-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencePage {
  private readonly content = inject(PortfolioContent);

  protected readonly ui = this.content.ui;
  protected readonly experiences = this.content.experiences;
}
