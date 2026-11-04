import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { PublicationCard } from '../../shared/components/publication-card/publication-card';
import { SeeAll, SeeAllPreview } from '../../shared/components/see-all/see-all';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

/** How many of the latest papers the home page shows before "see all". */
const RECENT_COUNT = 1;

/** Home-page teaser: the latest paper, with a link to the full list. */
@Component({
  selector: 'app-publications',
  imports: [PublicationCard, SeeAll, SectionTitle, RevealOnScroll],
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Publications {
  private readonly content = inject(PortfolioContent);

  protected readonly ui = this.content.ui;
  protected readonly publications = this.content.publications;

  protected readonly recent = computed(() => this.publications().slice(0, RECENT_COUNT));

  /** Older papers, previewed as small cards in the "see all" link (it shows up to 3). */
  protected readonly previews = computed<SeeAllPreview[]>(() => {
    const types = this.ui().publicationTypes;
    return this.publications()
      .slice(RECENT_COUNT)
      .map((paper) => ({
        eyebrow: `${types[paper.type]} · ${paper.year}`,
        title: paper.title,
        caption: paper.venue,
      }));
  });
}
