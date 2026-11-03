import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Education } from '../../features/education/education';
import { Experience } from '../../features/experience/experience';
import { Hero } from '../../features/hero/hero';
import { Projects } from '../../features/projects/projects';
import { Skills } from '../../features/skills/skills';

@Component({
  selector: 'app-home-page',
  imports: [Hero, Projects, Experience, Education, Skills],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-projects />
    <app-experience />
    <app-education />
    <app-skills />
  `,
})
export class HomePage {}
