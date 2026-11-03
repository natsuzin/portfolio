import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

startAtTopOnReload();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

/**
 * Reloading the page always starts at the top: the browser must not restore the
 * old scroll position, and a leftover section anchor (e.g. "#formacao") is dropped
 * so the router doesn't jump back to it. Shared links with an anchor still work,
 * since this only applies to reloads.
 */
function startAtTopOnReload(): void {
  const [navigation] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  if (navigation?.type !== 'reload') {
    return;
  }
  history.scrollRestoration = 'manual';
  if (location.hash) {
    history.replaceState(history.state, '', location.pathname + location.search);
  }
  window.scrollTo(0, 0);
}
