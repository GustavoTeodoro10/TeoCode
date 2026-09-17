# TeoCode — site institucional

Landing page da TeoCode (sites, agentes de IA, SEO, e-commerce e marketing digital,
em Mauá, SP). Site estático, sem backend — todo o contato acontece pelo WhatsApp.

Publicado em [teocode.com.br](https://teocode.com.br) via GitHub Pages (domínio
customizado configurado no arquivo `CNAME`).

## Estrutura do projeto

```
.
├── index.html              # página única, todo o conteúdo do site
├── CNAME                   # domínio customizado do GitHub Pages
├── assets/
│   ├── css/style.css       # CSS de produção (compilado do Tailwind, já commitado)
│   ├── js/main.js          # interações: menu, scroll reveal, contadores, chat
│   │                       #   mockup do WhatsApp, máscara de telefone, formulário
│   └── img/favicon.svg     # favicon (marca em losango sobre fundo gradiente)
├── src/
│   └── style.css           # fonte do Tailwind (tokens de cor, tipografia, componentes)
├── package.json            # script para recompilar o CSS quando o HTML mudar
└── .gitignore
```

Não há build step para publicar: o `assets/css/style.css` já vem compilado e
commitado, então o GitHub Pages serve os arquivos direto da raiz do repositório,
exatamente como já funciona hoje.

## Editando o site

O conteúdo inteiro está em `index.html`, usando classes utilitárias do
[Tailwind CSS v4](https://tailwindcss.com). Sempre que você adicionar ou remover
uma classe Tailwind no HTML (ou editar `src/style.css`), recompile o CSS:

```bash
npm install
npm run build
```

Para ir ajustando com o navegador atualizando sozinho enquanto edita:

```bash
npm run dev
```

Isso reescreve `assets/css/style.css` — é esse arquivo (não o `src/style.css`)
que o `index.html` carrega, então ele precisa estar sempre atualizado antes do
commit.

## Identidade visual

Paleta e tipografia mantidas do site anterior, para o negócio continuar
reconhecível:

- **Cores** — `#0a0e1a` (ink), `#f5f2ec` (paper), `#00c9a7` (teal, cor
  principal da marca), `#3d7fff` (azul, cor de apoio).
- **Tipografia** — [Syne](https://fonts.google.com/specimen/Syne) para
  títulos, [DM Sans](https://fonts.google.com/specimen/DM+Sans) para texto.
- **Marca** — o losango/diamante do logo original é reaproveitado como motivo
  gráfico (marcadores de lista, badges, cantos de cards).

## Decisões de conteúdo (o que mudou e por quê)

- **Depoimentos removidos.** Os três depoimentos do site anterior (Ana Paula,
  Roberto, Dra. Carla) eram exemplos/placeholder, não avaliações reais — foram
  substituídos pela seção "Diferenciais" (`#confianca`), com fatos verificáveis
  (CNPJ, atendimento direto, localização). Quando houver avaliações reais de
  clientes, essa seção é o lugar certo para entrar com elas.
- **E-mail de contato.** `contato@teocode.com.br` aparece no rodapé, na seção
  de contato e no schema.org (o site anterior não tinha nenhum e-mail
  configurado em lugar nenhum).
- **Estatísticas.** Mantive apenas números que já estavam publicados e não se
  contradiziam entre si (50+ projetos, 100% personalizado, prazo de 7–15 dias,
  suporte via WhatsApp). O selo de avaliação (4.7★ / 5★, inconsistente entre
  as seções do site antigo) foi removido — sem avaliações reais publicadas
  ainda, não fazia sentido manter uma nota fixa no ar.
- **Mockup de WhatsApp no hero.** A conversa mostrada é um exemplo ilustrativo
  de como o agente de IA atende (com essa legenda explícita abaixo do card),
  não uma transcrição real.

## SEO e dados estruturados

`index.html` mantém meta tags (title, description, Open Graph, Twitter Card) e
o JSON-LD `LocalBusiness` do site anterior, com endereço, telefone, horário de
atendimento e e-mail.
