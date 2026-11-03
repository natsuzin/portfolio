import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PortfolioContent } from '../../core/services/portfolio-content';
import { ContactIcon } from '../../shared/components/contact-icon/contact-icon';
import { HeartIcon } from '../../shared/components/heart-icon/heart-icon';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-footer',
  imports: [ContactIcon, HeartIcon, RevealOnScroll],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly content = inject(PortfolioContent);

  protected readonly contacts = this.content.contactLinks;
  protected readonly profile = this.content.profile;
  protected readonly ui = this.content.ui;
  protected readonly currentYear = new Date().getFullYear();
}
