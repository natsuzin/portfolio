import { SpriteName } from '../../../core/models/portfolio.models';

/**
 * Each sprite is a pixel matrix. Characters map to theme colors:
 * p = primary (green), a = accent (orange), t = text (light), . = transparent.
 */
export const SPRITE_PATTERNS: Record<SpriteName, readonly string[]> = {
  invader: [
    '..p.....p..',
    '...p...p...',
    '..ppppppp..',
    '.pp.ppp.pp.',
    'ppppppppppp',
    'p.ppppppp.p',
    'p.p.....p.p',
    '...pp.pp...',
  ],
  heart: ['.aa.aa.', 'aaaaaaa', 'aataaaa', '.aaaaa.', '..aaa..', '...a...'],
  ghost: [
    '...pppp...',
    '.pppppppp.',
    'pttpppttpp',
    'pttpppttpp',
    'pppppppppp',
    'pppppppppp',
    'pppppppppp',
    'p.pp..pp.p',
  ],
  pacman: [
    '..aaaa..',
    '.aaaaaa.',
    'aaaaa...',
    'aaaa....',
    'aaaa....',
    'aaaaa...',
    '.aaaaaa.',
    '..aaaa..',
  ],
  star: ['...p...', '..ppp..', 'ppppppp', '.ppppp.', '..ppp..', '.pp.pp.', 'p.....p'],
  trophy: [
    'pppppppp',
    'p.pppp.p',
    'p.pppp.p',
    '.pppppp.',
    '..pppp..',
    '...pp...',
    '..pppp..',
    '.pppppp.',
  ],
  flag: ['tp....', 'tpppp.', 'tppppp', 'tppp..', 't.....', 't.....', 't.....'],
  block: ['pp..', 'pp..', 'pppp', 'pppp'],
};

export const SPRITE_COLORS: Record<string, string> = {
  p: 'var(--color-primary)',
  a: 'var(--color-accent)',
  t: 'var(--color-text)',
};
