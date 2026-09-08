# MatheushDev Portfolio

Portfólio profissional de Matheus Henrique, com serviços de desenvolvimento web, projetos realizados e canais de contato.

Site publicado: <https://mat-henriqu.github.io/matheushdev-portfolio/>

## Tecnologias

- React 18 e TypeScript
- Vite
- Tailwind CSS e componentes Radix UI
- React Router com `HashRouter`

## Requisitos

- Node.js 20.19+, 22.12+ ou superior
- npm 11+

## Comandos

```powershell
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Estrutura

- `src/pages`: páginas do site.
- `src/components`: componentes de interface e seções reutilizáveis.
- `src/context`: estado do carrinho e persistência local.
- `public`: recursos estáticos publicados sem transformação.

O formulário de contato prepara um e-mail no cliente configurado pelo visitante. Ele não envia dados para um servidor.

## Publicação

A branch `main` contém o código-fonte. O comando abaixo gera `dist` e publica os arquivos compilados na branch `gh-pages`, usada pelo GitHub Pages.

```powershell
npm run deploy
```

Antes de publicar, execute `npm run lint`, `npm run typecheck` e `npm run build`.

O workflow **Publicar GitHub Pages** também pode ser acionado manualmente pela aba **Actions**. Ele valida o commit selecionado e atualiza a branch `gh-pages`.

## Tipagem

O comando `npm run typecheck` valida todos os projetos TypeScript com `tsc -b`. O modo `strict` permanece desativado no código de interface legado para permitir a migração gradual; novas alterações devem evitar `any` e reduzir essa pendência progressivamente.
