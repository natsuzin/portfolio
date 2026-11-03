import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SeeAll, SeeAllPreview } from '../../shared/components/see-all/see-all';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

/** Home-page teaser: shows the featured project and links to the full list. */
@Component({
  selector: 'app-projects',
  imports: [ProjectCard, SeeAll, SectionTitle, RevealOnScroll],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly content = inject(PortfolioContent);

  protected readonly ui = this.content.ui;
  protected readonly projects = this.content.projects;

  /** Featured projects, or the first one if none is marked as featured. */
  protected readonly highlighted = computed(() => {
    const all = this.projects();
    const featured = all.filter((project) => project.featured);
    return featured.length > 0 ? featured : all.slice(0, 1);
  });

  /** Screenshots of the remaining projects, previewed in the "see all" link. */
  protected readonly previews = computed<SeeAllPreview[]>(() =>
    this.projects()
      .filter((project) => !this.highlighted().includes(project))
      .map((project) => ({ imageUrl: project.imageUrl })),
  );
}
