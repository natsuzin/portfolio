import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { SKILL_ICONS } from './skill-icons';

@Component({
  selector: 'app-skills',
  imports: [SectionTitle, RevealOnScroll],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  private readonly content = inject(PortfolioContent);

  protected readonly ui = this.content.ui;
  /** Skills without an entry here (e.g. spoken languages) are shown as text tags. */
  protected readonly icons = SKILL_ICONS;

  /** Within each group, logos come first and text tags after, keeping the original order. */
  protected readonly skillGroups = computed(() =>
    this.content.skillGroups().map((group) => ({
      ...group,
      skills: [
        ...group.skills.filter((skill) => skill in SKILL_ICONS),
        ...group.skills.filter((skill) => !(skill in SKILL_ICONS)),
      ],
    })),
  );
}
