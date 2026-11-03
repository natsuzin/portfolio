import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Experience } from '../../../core/models/portfolio.models';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

/** Vertical timeline of jobs, shared by the home teaser and the full experience page. */
@Component({
  selector: 'app-experience-timeline',
  imports: [RevealOnScroll],
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceTimeline {
  readonly items = input.required<readonly Experience[]>();
}
