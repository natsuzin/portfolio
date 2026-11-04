import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'projetos',
    loadComponent: () =>
      import('./pages/projects/projects-page').then((page) => page.ProjectsPage),
  },
  {
    path: 'experiencia',
    loadComponent: () =>
      import('./pages/experience/experience-page').then((page) => page.ExperiencePage),
  },
  {
    // Same name as the section anchor, so the header highlights "Publications" here
    path: 'publications',
    loadComponent: () =>
      import('./pages/publications/publications-page').then((page) => page.PublicationsPage),
  },
  { path: '**', redirectTo: '' },
];
