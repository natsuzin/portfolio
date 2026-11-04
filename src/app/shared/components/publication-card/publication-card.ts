import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { Publication } from '../../../core/models/portfolio.models';
import { PortfolioContent } from '../../../core/services/portfolio-content';

/** One paper: type, title, authors, venue and a link to the official page. */
@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.html',
  styleUrl: './publication-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationCard {
  private readonly content = inject(PortfolioContent);

  readonly publication = input.required<Publication>();

  protected readonly ui = this.content.ui;
  /** The portfolio owner's name, highlighted in the author list. */
  protected readonly ownerName = computed(() => this.content.profile().name);
  /** DOI link when there is one (it never breaks if the publisher moves), else the official page. */
  protected readonly paperUrl = computed(() => {
    const { doi, pageUrl } = this.publication();
    return doi ? `https://doi.org/${doi}` : (pageUrl ?? null);
  });
}
