import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Project } from '../../core/models/portfolio.models';
import { PortfolioContent } from '../../core/services/portfolio-content';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

/** Full list of projects. */
@Component({
  selector: 'app-projects-page',
  imports: [RouterLink, ProjectCard, SectionTitle, RevealOnScroll],
  templateUrl: './projects-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPage {
  private readonly content = inject(PortfolioContent);

  protected readonly ui = this.content.ui;
  protected readonly projects = this.content.projects;

  /** Featured projects get the wide layout only when they're shown alongside others. */
  protected isWide(project: Project): boolean {
    return Boolean(project.featured) && this.projects().length > 1;
  }
}
