# Portfólio — Angular

Portfólio pessoal minimalista em tema escuro com tons de lilás e pequenos elementos de jogos retrô (Space Invaders, Pac-Man, Tetris, barras de HP/XP e o código Konami).

## Como rodar

```bash
npm install      # ou pnpm install
npm start        # http://localhost:3000
npm run build    # gera a versão de produção em dist/
npm test         # testes unitários (Karma + Jasmine)
```

Requer Node.js 20.19+ e Angular CLI 20.

## Onde editar o conteúdo

Todo o conteúdo (nome, foto, projetos, experiências, formação, habilidades e contatos) fica em um único arquivo:

```
src/app/core/data/portfolio.data.ts
```

Troque a foto em `public/images/profile.png`. As cores e fontes ficam nos tokens de `src/styles.scss`.

## Estrutura

```
src/app
├── core
│   ├── data/          # conteúdo do portfólio
│   ├── models/        # interfaces tipadas
│   └── services/      # PortfolioContent e KonamiCode
├── layout
│   ├── header/        # atalhos de navegação (menu mobile incluso)
│   └── footer/        # contatos: e-mail, telefone, GitHub e LinkedIn
├── features
│   ├── hero/          # introdução, foto e descrição
│   ├── projects/      # projetos em formato de "cartuchos"
│   ├── experience/    # experiência profissional ("save points")
│   ├── education/     # formação acadêmica ("conquistas")
│   └── skills/        # habilidades ("power-ups" estilo Tetris)
└── shared
    ├── components/    # PixelSprite e SectionTitle reutilizáveis
    └── directives/    # RevealOnScroll (animação ao rolar)
```

Boas práticas aplicadas: componentes standalone, `ChangeDetectionStrategy.OnPush`, signals, `input()`, novo control flow (`@for`, `@if`), `NgOptimizedImage`, dados desacoplados da UI, HTML semântico, foco visível, link "pular para o conteúdo" e respeito a `prefers-reduced-motion`.

Easter egg: digite ↑ ↑ ↓ ↓ ← → ← → B A em qualquer lugar da página.
