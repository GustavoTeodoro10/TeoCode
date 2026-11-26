# TeoCode - site institucional

Landing page one-page da TeoCode (sites, agentes de IA, SEO, e-commerce, manutenção e aplicativos personalizados, em Mauá, SP). HTML, CSS e JavaScript puros, com Tailwind CSS compilado para um arquivo estático. O único passo de build é o do CSS (veja "CSS (Tailwind)"); o que está no repositório é o que vai ao ar.

Publicado em https://teocode.com.br via GitHub Pages (domínio configurado no arquivo `CNAME`).

## Estrutura do projeto

```
.
├── index.html                  # página única (todo o conteúdo, SEO, Open Graph, JSON-LD, GoatCounter)
├── 404.html                    # página de endereço não encontrado (estilos próprios, sem Tailwind)
├── build-css.cmd               # compila o CSS do Tailwind (não vai para o site publicado)
├── favicon.ico                 # ícone pedido por navegadores na raiz (gerado a partir do logotipo)
├── robots.txt                  # libera os robôs de busca e aponta o sitemap
├── sitemap.xml                 # atualizar o <lastmod> quando o conteúdo mudar
├── llms.txt                    # resumo do negócio (padrão TeoCode; o Google ignora)
├── CNAME                       # domínio customizado do GitHub Pages
├── _config.yml                 # mantém arquivos de desenvolvimento fora do site publicado
├── README.md
├── PRODUCT.md                  # contexto do produto e fatos confirmados (uso interno)
├── DESIGN.md                   # sistema visual documentado (uso interno)
└── assets/
    ├── css/tailwind.input.css  # fonte do Tailwind: cores, fontes e componentes
    ├── css/tailwind.css        # GERADO pelo build-css.cmd (não editar à mão)
    ├── css/styles.css          # complementos ao Tailwind: movimento, accordion, fontes substitutas
    ├── js/main.js              # links do WhatsApp, rastreio de cliques, menu, animações, formulário
    ├── logo.svg                # logotipo ORIGINAL da TeoCode (não alterar)
    ├── favicon.svg             # favicon (o próprio logotipo)
    ├── favicon-32.png          # gerado a partir do logotipo
    ├── apple-touch-icon.png    # gerado a partir do logotipo
    ├── og-image.png            # prévia ao compartilhar o link (WhatsApp, Instagram, etc.)
    ├── og-image.source.html    # fonte do og-image.png
    └── icon-source.html        # fonte dos ícones PNG
```

## Rodar localmente

Qualquer servidor estático serve. Exemplo com Python:

```bash
python -m http.server 4173
```

Depois abra http://localhost:4173. (As fontes vêm do Google Fonts; sem internet aparecem as substitutas.)

## CSS (Tailwind)

O site carrega `assets/css/tailwind.css`, que contém só as classes usadas. **Ao criar ou trocar classes** no `index.html` ou no `main.js`, ou ao mudar o `tailwind.input.css`, compile antes do commit:

```powershell
.\build-css.cmd
```

Mudanças só de texto não precisam compilar. Para recompilar sozinho enquanto edita: `.\build-css.cmd --watch`.

O compilador é o executável oficial do Tailwind CSS 4.3.5 (não precisa de Node) e fica fora do repositório, em `%USERPROFILE%\tools\tailwindcss-4.3.5\tailwindcss-windows-x64.exe`. Em outro computador, baixe-o em https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.5 para esse caminho.

## Ícones

Os ícones são do Phosphor 2.1.1 (peso regular), embutidos como `<symbol>` no início do `<body>`. Para usar um que já existe: `<svg class="icon" aria-hidden="true"><use href="#i-nome" /></svg>`. Para um novo, copie o `<path>` do SVG em https://phosphoricons.com para um `<symbol id="i-nome" viewBox="0 0 256 256">`.

## Deploy (GitHub Pages)

1. No repositório: Settings, Pages, Source "Deploy from a branch", branch `main`, pasta `/ (root)`.
2. Em Custom domain, `teocode.com.br` (o arquivo `CNAME` já traz esse valor).
3. Cada push na `main` publica automaticamente.

## Como editar

- **Textos**: direto no `index.html`, por seção (`#servicos`, `#ofertas`, `#processo`, `#diferenciais`, `#faq`, `#agendar`, `#contato`).
- **Dados do negócio** (telefone, e-mail, endereço, horário, serviços): ao mudar, atualizar também o JSON-LD do `index.html` e o `llms.txt`.
- **Mensagem do WhatsApp de cada botão**: atributo `data-wa="..."` do link. O JavaScript monta o `wa.me` com a mensagem codificada. O número está em `assets/js/main.js` (`WA_NUMBER`) e no `href` base de cada link.
- **Cores e fontes**: tokens no bloco `@theme` do `assets/css/tailwind.input.css` (depois compile) (`ink`, `mid`, `paper`, `teal`, `blue`, `muted`; Syne para títulos e Hanken Grotesk para texto). O site é claro: fundo papel `#f4f2ee`, texto navy e teal só em preenchimentos e botões (teal não passa no contraste como cor de texto sobre claro).
- **Imagens PNG** (favicon, apple-touch-icon e og-image) são renderizadas a partir de `assets/logo.svg` com o Edge/Chrome headless. Exemplo para o og-image (com o servidor local rodando):

```bash
msedge --headless=new --window-size=1200,630 --virtual-time-budget=12000 --screenshot=assets/og-image.png http://localhost:4173/assets/og-image.source.html
```

## Animações e desempenho no celular

O movimento é em camadas, para o celular nunca pagar pelo que só faz sentido em tela grande:

| Camada | Onde liga | O que faz |
| --- | --- | --- |
| Base | Todos os aparelhos (a entrada do topo só em telas de 1024px ou mais) | Título revelado palavra por palavra, revelações leves ao rolar, conversa de exemplo, barra de progresso da rolagem, accordion e menu animados |
| `.fx` | Só tela de 1024px ou mais, com mouse, sem economia de dados e sem "reduzir movimento" | Parallax guiado por CSS (sem JavaScript na rolagem), destaque de luz que segue o mouse nos cartões e botões magnéticos |
| `.lite` | Economia de dados ou aparelho com 2 GB de memória ou 2 núcleos | Revelações sem blur |

No celular o título, o texto e os botões do topo aparecem imediatamente, para não atrasar a primeira tela.

- A decisão é tomada em `assets/js/main.js` (seção "Perfil de movimento do aparelho"); os efeitos em si estão em `assets/css/styles.css`.
- Quem ativa "reduzir movimento" no aparelho recebe só fades curtos, sem deslocamento.
- Para desligar um efeito específico, remova o atributo `data-px` (parallax), a classe `spot` (destaque de luz) ou `data-magnetic` (botão magnético) do elemento no `index.html`.

## GoatCounter (analytics sem cookies)

- **Onde está o script**: no `<head>` do `index.html`, na seção "Analytics: GoatCounter":

  ```html
  <script data-goatcounter="https://teocode.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
  ```

- **Rastreio de cliques**: um único listener delegado em `assets/js/main.js` (seção "Rastreio de cliques no GoatCounter"). Todo elemento com `data-gc-event` que for clicado chama `window.goatcounter.count({ path: nome, title: nome, event: true })`, protegido por `if (window.goatcounter && window.goatcounter.count)`. Se o script for bloqueado por adblock, o link do WhatsApp continua funcionando normalmente.

- **Eventos de CTA do WhatsApp** (um nome único por posição na página):

  | Evento | Onde |
  | --- | --- |
  | `cta-nav` | botão "Agendar avaliação" do menu (desktop) |
  | `cta-menu-mobile` | botão do menu no celular |
  | `cta-hero` | botão principal do topo da página |
  | `cta-hero-agente` | link "Quero um agente de IA assim" abaixo da conversa de exemplo |
  | `cta-servico-sites` | serviço Criação de sites |
  | `cta-servico-agentes-ia` | serviço Agentes de IA |
  | `cta-servico-seo` | serviço SEO |
  | `cta-servico-ecommerce` | serviço E-commerce |
  | `cta-servico-manutencao` | serviço Manutenção |
  | `cta-servico-apps` | serviço Aplicativos personalizados |
  | `cta-oferta-avaliacao` | oferta Avaliação gratuita |
  | `cta-oferta-projeto` | oferta Projeto de site |
  | `cta-oferta-manutencao` | oferta Manutenção mensal |
  | `cta-processo` | botão da seção Como funciona |
  | `cta-faq` | link "Perguntar pelo WhatsApp" do FAQ |
  | `cta-banner` | faixa final "Pronto para começar?" |
  | `cta-contato-whatsapp` | cartão de telefone/WhatsApp da seção Contato |
  | `cta-contato-formulario` | envio do formulário de orçamento |
  | `cta-footer` | telefone/WhatsApp do rodapé |
  | `cta-footer-social` | ícone do WhatsApp no rodapé |
  | `cta-flutuante` | botão flutuante do WhatsApp |
  | `cta-404` | botão do WhatsApp na página `404.html` (rastreio no próprio arquivo) |

  Eventos de links que não vão ao WhatsApp, também registrados: `link-perfil-google`, `link-contato-email`, `link-contato-maps`, `link-footer-email`, `link-footer-maps`.

- **Onde ver os dados**: no painel do GoatCounter (https://teocode.goatcounter.com), abra Dashboard e role até a seção **Events**. Cada nome acima aparece com a contagem de cliques.

- **Lembrete importante**: o domínio do site precisa estar cadastrado no painel do GoatCounter para que as visitas e os eventos apareçam. Em Settings, confirme que `teocode.com.br` consta como domínio do site e na lista de domínios permitidos para enviar dados ("Allow adding data from these domains"). Acessos vindos de `localhost` são ignorados por padrão, então teste em produção.

## O que ainda falta (não foi inventado)

Estes itens não existem hoje e por isso não aparecem no site:

- **Avaliações do Google**: o perfil da TeoCode no Google Maps ainda não tem nenhuma avaliação. A área de prova social mostra apenas fatos verificáveis (CNPJ, endereço, horário, prazos). Quando houver avaliações reais, o lugar para elas é a seção "Por que a TeoCode" (`#diferenciais`), com o link do perfil já presente.
- **Redes sociais**: só existem WhatsApp e o perfil do Google Maps. Se houver Instagram, Facebook ou LinkedIn reais, incluir na coluna "Redes" do rodapé.
- **Preços**: nenhum valor é divulgado. As ofertas descrevem formatos e prazos, sem preço.
- **Fotos de projetos ou da equipe**: não existem arquivos de imagem. O topo usa uma conversa ilustrativa (marcada como exemplo) no lugar de fotografia.
- **Perfil do Google**: o site informado lá hoje é `gustavoteodoro10.github.io`. Vale atualizar para `https://teocode.com.br`.

## Decisões de conteúdo

- Todo o texto vem do site anterior (serviços, processo, FAQ, endereço, horário, CNPJ) ou foi confirmado pelo responsável (e-mail `contato@teocode.com.br`).
- Os depoimentos antigos eram exemplos e foram removidos. Os números "50+ projetos", "98% de satisfação", "3x" e a nota em estrelas não puderam ser verificados e também ficaram de fora.
- O logotipo é o original, extraído do SVG do site anterior sem nenhuma alteração.
