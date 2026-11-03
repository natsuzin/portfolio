import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { ExperienceTimeline } from '../../shared/components/experience-timeline/experience-timeline';
import { SeeAll, SeeAllPreview } from '../../shared/components/see-all/see-all';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

/** How many of the latest jobs the home page shows before "see all". */
const RECENT_COUNT = 2;

/** Home-page teaser: the latest jobs, with a link to the full history. */
@Component({
  selector: 'app-experience',
  imports: [ExperienceTimeline, SeeAll, SectionTitle, RevealOnScroll],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  private readonly content = inject(PortfolioContent);

  protected readonly ui = this.content.ui;
  protected readonly experiences = this.content.experiences;

  protected readonly recent = computed(() => this.experiences().slice(0, RECENT_COUNT));

  /** Older jobs, previewed as small cards in the "see all" link. */
  protected readonly previews = computed<SeeAllPreview[]>(() =>
    this.experiences()
      .slice(RECENT_COUNT)
      .map((job) => ({ eyebrow: job.period, title: job.role, caption: job.company })),
  );
}
