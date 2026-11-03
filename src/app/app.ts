import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { KonamiCode } from './core/services/konami-code';
import { PortfolioContent } from './core/services/portfolio-content';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'onKeydown($event)',
  },
})
export class App {
  protected readonly konami = inject(KonamiCode);
  protected readonly ui = inject(PortfolioContent).ui;

  /** Moves focus to <main> without a navigation (a plain "#" link would leave /projetos). */
  protected skipToContent(event: Event, main: HTMLElement): void {
    event.preventDefault();
    main.focus();
  }

  protected onKeydown(event: KeyboardEvent): void {
    this.konami.registerKey(event.key);
  }
}
