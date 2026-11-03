import { TestBed } from '@angular/core/testing';

import { App } from './app';

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

});
