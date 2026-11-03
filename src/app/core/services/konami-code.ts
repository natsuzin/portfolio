import { DestroyRef, Injectable, inject, signal } from '@angular/core';

const KONAMI_SEQUENCE = [
  'arrowup',
  'arrowup',
  'arrowdown',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'arrowleft',
  'arrowright',
  'b',
  'a',
] as const;

const REWARD_DURATION_MS = 3500;

@Injectable({ providedIn: 'root' })
export class KonamiCode {
  private progress = 0;
  private hideTimer?: ReturnType<typeof setTimeout>;

  readonly isUnlocked = signal(false);

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.hideTimer));
  }

  registerKey(key: string): void {
    const normalizedKey = key.toLowerCase();

    if (normalizedKey === KONAMI_SEQUENCE[this.progress]) {
      this.progress++;
    } else {
      this.progress = normalizedKey === KONAMI_SEQUENCE[0] ? 1 : 0;
    }

    if (this.progress === KONAMI_SEQUENCE.length) {
      this.progress = 0;
      this.unlock();
    }
  }

  private unlock(): void {
    clearTimeout(this.hideTimer);
    this.isUnlocked.set(true);
    this.hideTimer = setTimeout(() => this.isUnlocked.set(false), REWARD_DURATION_MS);
  }
}
