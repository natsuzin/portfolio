import { TestBed } from '@angular/core/testing';

import { App } from './app';
import { KonamiCode } from './core/services/konami-code';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('should render every portfolio section', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    for (const id of ['inicio', 'projetos', 'experiencia', 'formacao', 'habilidades', 'contato']) {
      expect(element.querySelector(`#${id}`)).withContext(id).not.toBeNull();
    }
  });

  it('should unlock the Konami reward after the full sequence', () => {
    const konami = TestBed.inject(KonamiCode);
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    sequence.forEach((key) => konami.registerKey(key));

    expect(konami.isUnlocked()).toBeTrue();
  });
});
