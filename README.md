<<<<<<< HEAD
# Portfólio 

Portfólio pessoal minimalista em tema escuro.
=======
# Portfólio

Portfólio pessoal de Nathalia Suzin, desenvolvedora front-end. Tema escuro minimalista, com verde e laranja de destaque, tipografia Inter + JetBrains Mono e versão em português e inglês.
>>>>>>> 22ab643 (ci: deploy automático no GitHub Pages)

## Como rodar

```bash
npm install      # ou pnpm install
npm start        # http://localhost:3000
npm run build    # gera a versão de produção em dist/
npm test         # testes unitários (Karma + Jasmine)
```

Requer Node.js 20.19+ e Angular CLI 20.

<<<<<<< HEAD
Boas práticas aplicadas: componentes standalone, `ChangeDetectionStrategy.OnPush`, signals, `input()`, novo control flow (`@for`, `@if`), `NgOptimizedImage`, dados desacoplados da UI, HTML semântico, foco visível, link "pular para o conteúdo" e respeito a `prefers-reduced-motion`.
=======
## Páginas

| Rota           | Conteúdo                                                            |
| -------------- | ------------------------------------------------------------------- |
| `/`            | Início: apresentação, projetos, experiência, formação e habilidades |
| `/projetos`    | Todos os projetos                                                   |
| `/experiencia` | Toda a experiência profissional                                     |

As páginas `/projetos` e `/experiencia` são carregadas sob demanda (lazy loading).

## Idiomas

O seletor PT/EN fica no cabeçalho. Na primeira visita, o idioma segue o do navegador (inglês como padrão); depois, a escolha fica salva no `localStorage`. Ao trocar de idioma, o `lang` do `<html>`, o título da aba e a meta description também mudam.

## Onde editar o conteúdo

Todo o conteúdo (textos da interface, perfil, projetos, experiências, formação, habilidades e contatos) fica em dois arquivos, um por idioma:

```
src/app/core/data/content.pt.ts   # português
src/app/core/data/content.en.ts   # inglês
```

URLs, imagens e nomes são definidos em `content.pt.ts` e reaproveitados em `content.en.ts`, que traduz só os textos.

As imagens ficam em `public/images/`: foto de perfil (`nathalia.jpg`), capturas dos projetos (`projects/*.webp`), ícones de contato (`icons/`) e logo da universidade. O currículo em PDF fica em `public/curriculo/` (`nathalia-suzin-pt.pdf` e `nathalia-suzin-en.pdf`). Cores, fontes, raios e espaçamentos são tokens CSS em `src/styles.scss`.

## Estrutura

```
src/app
├── core
│   ├── data/          # conteúdo em PT e EN
│   ├── models/        # interfaces tipadas
│   └── services/      # PortfolioContent (conteúdo + idioma)
├── layout
│   ├── header/        # navegação, seletor de idioma e menu mobile
│   └── footer/        # contatos: e-mail, currículo em PDF, GitHub e LinkedIn
├── pages
│   ├── home/          # página inicial
│   ├── projects/      # todos os projetos
│   └── experience/    # toda a experiência
├── features
│   ├── hero/          # apresentação, foto e chamadas
│   ├── projects/      # projetos em destaque
│   ├── experience/    # experiências mais recentes
│   ├── education/     # formação acadêmica
│   └── skills/        # habilidades com ícones das tecnologias
└── shared
    ├── components/    # ProjectCard, ExperienceTimeline, SeeAll,
    │                  # SectionTitle, ContactIcon e HeartIcon
    └── directives/    # RevealOnScroll (animação ao rolar)
```

## Boas práticas

Componentes standalone, `ChangeDetectionStrategy.OnPush`, signals, `input()`, novo control flow (`@for`, `@if`), rotas com lazy loading, `NgOptimizedImage`, imagens em WebP, dados desacoplados da UI, HTML semântico, `lang` e metadados sincronizados com o idioma, foco visível, link "pular para o conteúdo" e respeito a `prefers-reduced-motion`.
>>>>>>> 22ab643 (ci: deploy automático no GitHub Pages)
