import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { PublicationCard } from '../../shared/components/publication-card/publication-card';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

/** Full list of papers. */
@Component({
  selector: 'app-publications-page',
  imports: [RouterLink, PublicationCard, SectionTitle, RevealOnScroll],
  templateUrl: './publications-page.html',
  styleUrl: '../../features/publications/publications.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationsPage {
  private readonly content = inject(PortfolioContent);

  protected readonly ui = this.content.ui;
  protected readonly publications = this.content.publications;
}
