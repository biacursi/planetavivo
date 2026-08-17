# ♻️ Planeta Vivo — Landing Page

Landing page oficial do **Projeto Planeta Vivo**, ONG sem fins lucrativos dedicada a disseminar consciência sobre o mercado de reciclagem no Brasil, com foco em capacitação, profissionalização e desenvolvimento de catadores e outros agentes da cadeia de reciclagem.

O site apresenta a história da ONG, destaca episódios e shorts do canal **Planeta Ao Vivo** no YouTube e direciona visitantes para as redes sociais oficiais.

🔗 **Site publicado:** https://biacursi.github.io/planetavivo/

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build e dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização
- [Framer Motion](https://www.framer.com/motion/) — animações e transições
- [React Icons](https://react-icons.github.io/react-icons/) — ícones (redes sociais, play, menu)

## Estrutura do projeto

```
planetavivo/
├── public/
│   ├── logo.png        # selo/logo oficial do Projeto Planeta Vivo
│   └── favicon.png      # ícone da aba do navegador
├── src/
│   ├── components/
│   │   ├── Navbar.tsx    # menu fixo, com versão mobile (hambúrguer)
│   │   ├── Hero.tsx      # seção inicial com vídeo de fundo
│   │   ├── About.tsx     # seção "Sobre nós" com estatísticas
│   │   ├── VideoGrid.tsx # grade de episódios e shorts do canal
│   │   ├── VideoCard.tsx # card individual de vídeo
│   │   ├── VideoModal.tsx# player em modal ao clicar num vídeo
│   │   ├── CtaBand.tsx   # faixa de chamada para ação
│   │   ├── Footer.tsx    # rodapé com navegação, redes sociais e créditos
│   │   └── Counter.tsx   # animação de contagem numérica
│   ├── data/
│   │   └── videos.ts     # lista de vídeos, links de redes sociais e canal
│   ├── hooks/
│   │   └── useScrollReveal.ts # animações de entrada ao rolar a página
│   ├── index.css         # tema de cores, fontes e estilos globais
│   └── main.tsx          # ponto de entrada da aplicação
└── index.html
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
# instalar as dependências (só precisa rodar uma vez)
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

O terminal vai mostrar um endereço local, geralmente `http://localhost:5173/`. Abra esse link no navegador — a página recarrega automaticamente a cada alteração salva no código.

Outros comandos úteis:

```bash
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # visualiza localmente a versão de produção já buildada
npm run lint     # verifica o código com o oxlint
```

## Publicação (GitHub Pages)

O site é publicado via [GitHub Pages](https://pages.github.com/), a partir da branch `gh-pages`, gerada pelo pacote [`gh-pages`](https://www.npmjs.com/package/gh-pages).

Para publicar uma atualização depois de alterar o código:

```bash
npm run deploy
```

Esse comando builda o projeto (`predeploy`) e envia o conteúdo da pasta `dist/` para a branch `gh-pages` do repositório. O GitHub Pages atualiza o site automaticamente em seguida — pode levar 1 a 2 minutos para propagar.

> O caminho base do site (`base: '/planetavivo/'`) está configurado em `vite.config.ts`, pois o GitHub Pages publica projetos numa subpasta do domínio (`usuario.github.io/nome-do-repositorio/`). Se o repositório for renomeado, esse valor precisa ser atualizado.

## Editando o conteúdo

- **Vídeos do canal**: adicione, remova ou edite itens em `src/data/videos.ts` (cada vídeo tem `id` do YouTube, título, tipo — `episode` ou `short` —, visualizações e descrição).
- **Links de redes sociais e canal**: também em `src/data/videos.ts` (`CHANNEL_URL`, `INSTAGRAM_URL`, `LINKEDIN_URL`).
- **Cores e fontes**: definidas como variáveis de tema em `src/index.css` (`--color-forest`, `--color-indigo`, `--color-cream`, etc.), usadas como classes do Tailwind (`bg-forest-dark`, `text-indigo-light`...) nos componentes.
- **Logo**: arquivo `public/logo.png`, referenciado em `Navbar.tsx` e `Footer.tsx`.

## Créditos

Feito com ♥ por [Bianca Cursi](https://br.linkedin.com/in/bianca-marcelino-cursii?trk=people-guest_people_search-card).
