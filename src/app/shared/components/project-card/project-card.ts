import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { Project } from '../../../core/models/portfolio.models';
import { PortfolioContent } from '../../../core/services/portfolio-content';
import { SectionBadge } from '../section-badge/section-badge';

/** A single project: preview screenshot, description, highlights, tags and links. */
@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, SectionBadge],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.project-card--wide]': 'wide()',
  },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  /** Side-by-side layout (preview next to the text) on large screens. */
  readonly wide = input(false);
  /** Loads the preview eagerly; use for the first card visible on load. */
  readonly priority = input(false);

  protected readonly ui = inject(PortfolioContent).ui;
}
