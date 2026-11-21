---
name: TeoCode
description: Landing page de uma agência local de sites e agentes de IA, em papel quente com texto navy e teal como única cor de ação.
colors:
  ink: "#0a0e1a"
  mid: "#1e2740"
  paper: "#f4f2ee"
  teal: "#00c9a7"
  blue: "#3d7fff"
  muted: "#6b7280"
  teal-hover: "#14dbb8"
  logo-cyan-light: "#a8eaea"
  logo-cyan: "#5bc8c8"
  logo-cyan-deep: "#1a9eaa"
typography:
  display:
    fontFamily: "Syne, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.3vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Syne, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Syne, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  input: "12px"
  surface: "24px"
  sheet: "40px"
  pill: "9999px"
spacing:
  section-y: "128px"
  section-y-mobile: "96px"
  gutter: "20px"
  gutter-wide: "32px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.teal-hover}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  tile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "36px"
  tile-featured:
    backgroundColor: "{colors.mid}"
    textColor: "{colors.paper}"
    rounded: "{rounded.surface}"
    padding: "36px"
  field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "12px 16px"
---

# Design System: TeoCode

## Overview

**Creative North Star: "A bancada de atendimento à luz do dia"**

Uma bancada limpa, com papel quente, tinta navy e uma única cor de ação, onde cada folha empilhada leva o visitante um passo mais perto de uma conversa no WhatsApp. O sistema é claro por decisão do responsável (a versão anterior era escura), sóbrio nos blocos e ousado em um único lugar: a tipografia Syne em peso 800, larga e densa, que também é a face do wordmark do logotipo.

A profundidade vem de seções que se empilham como folhas de papel (cantos superiores de 40px, sombra suave para cima) e de cartões brancos sobre papel. O teal `#00c9a7` é a cor de ação e só aparece como preenchimento (botões, chips de ícone, bolhas da conversa, faixa final), nunca como cor de texto, porque sobre o papel ele tem cerca de 1,9 para 1 de contraste. O navy aparece como texto e em uma única superfície de contraste, o cartão de Agentes de IA.

**Key Characteristics:**
- Fundo papel `#f4f2ee` alternando com folhas brancas; texto sempre em navy `#0a0e1a` com opacidades de 85% a 60%.
- Teal só em preenchimentos, com texto navy por cima; links são navy com sublinhado teal de 2px.
- Títulos em Syne 800, revelados palavra por palavra; texto corrido em Hanken Grotesk, sem caixa alta decorativa.
- Movimento em camadas: revelações leves em todos os aparelhos; parallax, destaque de luz que segue o mouse e botões magnéticos só em tela grande com mouse (classe `.fx`).
- Logotipo original intocado (esfera em gradiente ciano com o cubo isométrico), com a sombra do site anterior.

## Colors

Paleta original da marca, mantida exatamente. O tom claro `#f4f2ee` já pertencia à paleta; o navy passou de fundo para tinta.

### Primary
- **Teal da Luz do Dia** (#00c9a7): botões primários, chips de ícone, marcadores de lista, bolhas enviadas, o nó das etapas e a faixa final "Pronto para começar?". Texto sobre teal é sempre `ink`.
- **Teal de Hover** (#14dbb8): apenas o estado hover do botão primário.

### Secondary
- **Azul Ambiente** (#3d7fff): só como tinta de 12% a 14% em um gradiente (cartão de e-commerce e canto do topo). Nunca é cor de ação nem de texto.

### Neutral
- **Tinta Navy** (#0a0e1a): texto, bordas em baixa opacidade, botão secundário e a superfície de contraste do cartão de Agentes de IA.
- **Navy de Superfície** (#1e2740): ponto de partida do gradiente do cartão de Agentes de IA.
- **Papel Quente** (#f4f2ee): fundo da página, cartões sobre folhas brancas e texto sobre navy.
- **Branco de Folha** (#ffffff): folhas alternadas, cartões sobre papel e campos de formulário.
- **Cinza Neutro** (#6b7280): mantido na paleta; não é usado em texto legível porque não atinge 4.5:1 sobre o papel.
- **Ciano do Logotipo** (#a8eaea, #5bc8c8, #1a9eaa): pertencem ao logotipo original e à sombra dele; não são tokens de interface.

### Named Rules
**The Fill-Only Teal Rule.** Teal só preenche; nunca vira cor de texto ou de ícone solto sobre claro. Texto e links são navy.

**The One Dark Rule.** O navy sólido aparece em uma única superfície (Agentes de IA) por tela; o resto da página é claro.

## Typography

**Display Font:** Syne (800 e 700), com `ui-sans-serif, system-ui` como fallback
**Body Font:** Hanken Grotesk (400, 500, 600), com `ui-sans-serif, system-ui` como fallback

**Character:** Syne é larga, densa e um pouco excêntrica, e já é a voz do wordmark; Hanken Grotesk é neutra e legível, e deixa a Syne falar sozinha. O contraste entre as duas é de largura e peso.

### Hierarchy
- **Display** (800, `clamp(2.4rem, 5.3vw, 4.6rem)`, 1.02): apenas o título do topo, em duas linhas, tracking -0.035em.
- **Headline** (800, `clamp(2rem, 3.6vw, 3.25rem)`, 1.06): títulos de seção, tracking -0.03em, `text-wrap: balance`.
- **Title** (700, 1.3rem a 1.9rem, 1.15): cartões, ofertas e linhas de diferenciais.
- **Body** (400, 1.05rem, 1.65): parágrafos, no máximo 52 a 56 caracteres por linha nos apoios, em navy a 70% a 80%.
- **Label** (600, 0.95rem): botões, links de ação e rótulos de formulário, sempre em caixa normal.

### Named Rules
**The No Eyebrow Rule.** Nenhum rótulo pequeno acima de títulos.

**The Syne-Is-Brand Rule.** Syne só em títulos, números de etapa e no wordmark; nunca em texto corrido.

## Layout

Uma página, navegação por âncoras. Contêiner de conteúdo de 1280px centralizado (1600px a partir de 1920px e 1900px a partir de 2560px; barra e topo usam a mesma largura das demais seções), gutters de 20px no celular e 32px de 640px em diante; a fonte raiz sobe para 112,5% a partir de 1920px e 125% a partir de 2560px para a página crescer com a tela.

As seções são folhas empilhadas (`.sheet`: sobem 40px sobre a anterior, cantos superiores de 40px) alternando papel e branco, com a faixa teal no fim. As famílias de layout se alternam: topo assimétrico 7/5 com a conversa de exemplo, bento de seis células (7/5, 5/7, 7/5), coluna fixa à esquerda com pilha de ofertas, linha do tempo horizontal, linhas tipográficas com hairlines, accordion estreito, faixa teal e contato em 5/7. Abaixo de 1024px tudo vira coluna única e o menu vira tela cheia.

## Elevation & Depth

Híbrido: folhas empilhadas e cartões brancos resolvem a hierarquia; sombras com deslocamento só onde algo flutua. Não há brilho neon nem halo colorido de deslocamento zero (a única sombra colorida de halo é a do logotipo original).

### Shadow Vocabulary
- **Folha** (`box-shadow: 0 -24px 48px -32px rgba(10,14,26,.28)`): borda superior de cada seção empilhada.
- **Painel flutuante** (`0 40px 70px -34px rgba(10,14,26,.45)`): cartão da conversa de exemplo.
- **Botão primário** (`0 10px 24px -12px rgba(0,140,118,.75)`): sombra tingida de teal escuro, intensifica no hover.
- **Logotipo** (`0 3px 14px rgba(91,200,200,.55)`): herdada do site anterior e preservada.

### Named Rules
**The Sheet Rule.** A hierarquia entre seções vem de folhas que se sobrepõem, não de linhas divisórias.

## Shapes

Quatro raios com regra fixa: botões em pílula (9999px), superfícies e cartões em 24px (accordion em 16px, chips de ícone em 12px), campos de formulário em 12px e folhas de seção em 40px no topo. O cubo isométrico do logotipo aparece só no logotipo.

## Components

### Buttons
- **Shape:** pílula (9999px), altura mínima de 48px, texto em caixa normal com ícone Phosphor à esquerda.
- **Primary:** fundo `teal`, texto `ink`, padding 12px 24px. Hover sobe 2px e clareia para #14dbb8; `:active` reduz para 97%. Em tela grande com mouse, o botão é magnético (até 8px em direção ao cursor).
- **Ink:** fundo `ink` com texto `paper`, usado sobre a faixa teal.
- **Quiet:** texto navy a 80%, sem fundo.

### Cards / Containers (tile)
- **Corner Style:** 24px.
- **Background:** `paper` sobre folhas brancas e `white` sobre papel, com variações reais por célula: tinta de teal, tinta de azul e, no destaque, gradiente navy.
- **Border:** 1px navy a 10%; vai a 25% no hover. Em tela grande com mouse, um destaque de luz teal segue o cursor.
- **Internal Padding:** 28px no celular, 36px a partir de 640px.

### Inputs / Fields
- **Style:** fundo branco, borda navy a 20%, raio 12px, rótulo sempre acima.
- **Focus:** borda navy e anel de 3px em teal a 40%. Erro: borda #c0392b e mensagem #b02a1c abaixo do campo, anunciada por `role="alert"`.

### Navigation
- Barra fixa de 68px em uma linha, transparente no topo e papel a 85% com blur ao rolar. Links navy em 14px com sublinhado teal que se desenha no hover; botão teal à direita. Abaixo de 1024px, hambúrguer de 44px abre menu de tela cheia em papel, com entrada escalonada de 50ms. Uma barra fina de teal no topo mostra o progresso da rolagem.

### Conversa de exemplo (componente de assinatura)
Cartão branco de 400px que mostra um agente de IA marcando um horário no WhatsApp: mensagens recebidas em branco, enviadas em teal com texto navy, fundo da conversa em #ebe8e1, horários em numerais tabulares. É ilustrativo e sempre vem com a legenda "Exemplo ilustrativo". Toca uma vez ao carregar.

## Do's and Don'ts

### Do:
- **Do** manter o logotipo original (`assets/logo.svg`) em 42px com a sombra original e o wordmark "TeoCode" em Syne 800, 1.4rem, em navy.
- **Do** usar teal só em preenchimentos, com texto navy por cima; links em navy com sublinhado teal.
- **Do** manter todo CTA como link `wa.me` com mensagem em `data-wa` e nome único em `data-gc-event`.
- **Do** ligar parallax, destaque de luz e botões magnéticos só pela classe `.fx` (tela grande, mouse, aparelho com folga, sem reduzir movimento).
- **Do** manter conteúdo visível por padrão e respeitar `prefers-reduced-motion` (fades curtos, sem deslocamento); hover abaixo de 300ms, com `:active` em 97%.

### Don't:
- **Don't** inventar avaliações, números, preços ou clientes.
- **Don't** usar teal como cor de texto sobre claro, rótulos em caixa alta acima de títulos, texto com gradiente, emoji como ícone, travessão ou ponto médio em texto.
- **Don't** alterar, redesenhar ou restilizar o logotipo.
- **Don't** voltar ao tema escuro nem usar mais de uma superfície navy sólida por tela.
