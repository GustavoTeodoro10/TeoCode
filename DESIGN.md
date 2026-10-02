---
name: TeoCode
description: Landing page de uma agência local de sites e agentes de IA, em um navy profundo com teal como única cor de ação.
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
    backgroundColor: "{colors.mid}"
    textColor: "{colors.paper}"
    rounded: "{rounded.surface}"
    padding: "36px"
  tile-featured:
    backgroundColor: "{colors.mid}"
    textColor: "{colors.paper}"
    rounded: "{rounded.surface}"
    padding: "36px"
  field:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.input}"
    padding: "12px 16px"
---

# Design System: TeoCode

## Overview

**Creative North Star: "O balcão aberto à noite"**

Um balcão de atendimento que continua aceso depois do expediente: o navy profundo é a noite, o teal é a luz que fica ligada, e cada superfície existe para levar o visitante a uma conversa no WhatsApp. O sistema é escuro por escolha (template Premium/Dark pedido para esta marca), sóbrio nos blocos e ousado em um único lugar: a tipografia Syne em peso 800, larga e densa, que carrega a personalidade da marca (é também a face do wordmark do logotipo).

A profundidade vem de camadas tonais do próprio navy e de sombras com deslocamento, nunca de brilho neon. O teal é a única cor de ação e aparece em poucos lugares com muita força: o botão principal, uma tinta forte no serviço em destaque (Agentes de IA) e uma faixa final inteira. O azul `#3d7fff` existe só como tinta ambiente muito discreta.

**Key Characteristics:**
- Fundo `ink` em toda a página; seções se diferenciam por tons de `mid` em baixa opacidade, nunca por inversão para claro.
- Títulos em Syne 800, largos e compactos; texto corrido em Hanken Grotesk, sem caixa alta decorativa.
- Um momento de movimento orquestrado (a conversa de exemplo no topo) e revelações curtas e variadas ao rolar.
- Logotipo original intocado (esfera em gradiente ciano com o cubo isométrico), sempre no tamanho e com a sombra do site anterior.

## Colors

Paleta original da marca, mantida exatamente: navy profundo, navy de superfície, papel quente (só para texto e a faixa de contraste) e um teal vivo como única cor de ação.

### Primary
- **Teal da Luz Acesa** (#00c9a7): botões primários, ícones de ação, estados ativos, a tinta do serviço em destaque e a faixa final "Pronto para começar?", o único campo sólido de teal da página. Texto sobre teal é sempre `ink`.
- **Teal de Hover** (#14dbb8): apenas o estado hover do botão primário.

### Secondary
- **Azul Ambiente** (#3d7fff): aparece só como tinta de 8% a 16% em um gradiente de fundo (card de e-commerce, canto do hero). Nunca é cor de ação nem de texto.

### Neutral
- **Noite Navy** (#0a0e1a): fundo de página, texto sobre teal e fundo dos campos.
- **Navy de Superfície** (#1e2740): cartões, accordion e blocos de contato, sempre em opacidade entre 20% e 55% sobre o fundo.
- **Papel Quente** (#f4f2ee): texto principal (opacidades 100%, 85%, 75%, 70% e 60% para a hierarquia) e hairlines em 7% a 25%.
- **Cinza Neutro** (#6b7280): mantido na paleta original; não é usado para texto legível porque não atinge 4.5:1 sobre o navy.
- **Ciano do Logotipo** (#a8eaea, #5bc8c8, #1a9eaa): pertencem exclusivamente ao logotipo original e à sombra dele; não são tokens de interface.

### Named Rules
**The One Light Rule.** O teal é a única cor de ação. Se um segundo elemento colorido precisa chamar atenção, ele ganha tamanho ou peso, não uma nova cor.

**The No Inversion Rule.** A página inteira é escura. Seções não viram claras no meio da rolagem; a faixa teal final é cor, não troca de tema.

## Typography

**Display Font:** Syne (800 e 700), com `ui-sans-serif, system-ui` como fallback
**Body Font:** Hanken Grotesk (400, 500, 600), com `ui-sans-serif, system-ui` como fallback

**Character:** Syne é larga, densa e um pouco excêntrica, e já é a voz do wordmark; Hanken Grotesk é neutra e legível, deixa a Syne falar sozinha. O contraste entre as duas é de largura e peso, não de estilo.

### Hierarchy
- **Display** (800, `clamp(2.4rem, 5.3vw, 4.6rem)`, 1.02): apenas o título do topo, em no máximo duas linhas, com tracking -0.035em.
- **Headline** (800, `clamp(2rem, 3.6vw, 3.25rem)`, 1.06): títulos de seção, tracking -0.03em, `text-wrap: balance`.
- **Title** (700, 1.3rem a 1.9rem, 1.15): títulos de cartões, ofertas e linhas de diferenciais.
- **Body** (400, 1.05rem, 1.65): parágrafos, no máximo 52 a 56 caracteres por linha nos textos de apoio, em `paper` a 70% a 80%.
- **Label** (600, 0.95rem): botões, links de ação e rótulos de formulário, sempre em caixa normal.

### Named Rules
**The No Eyebrow Rule.** Nenhum rótulo pequeno acima de títulos. O título carrega o próprio peso.

**The Syne-Is-Brand Rule.** Syne só em títulos, números de etapa e no wordmark; nunca em texto corrido.

## Layout

Uma página, navegação por âncoras. Contêiner de conteúdo de 1280px centralizado (1600px a partir de 1920px e 1900px a partir de 2560px; barra de navegação e topo usam a mesma largura de conteúdo das demais seções), gutters de 20px no celular e 32px de 640px em diante; o tamanho raiz sobe para 112,5% a partir de 1920px e 125% a partir de 2560px para que a página cresça junto com a tela. Ritmo vertical de 96px (celular) a 128px (desktop) entre seções, com mais espaço acima do título do que abaixo.

As famílias de layout se alternam e nunca se repetem em seções vizinhas: topo assimétrico 7/5 com a conversa de exemplo, bento de seis células (7/5, 5/7, 7/5), coluna fixa à esquerda com pilha de ofertas, linha do tempo horizontal com linha que se desenha, linhas tipográficas divididas por hairlines, accordion estreito, faixa teal de largura total e contato em 5/7. Em telas abaixo de 1024px tudo vira coluna única e o menu vira tela cheia.

## Elevation & Depth

Híbrido: camadas tonais para hierarquia e sombras com deslocamento só onde um elemento flutua. Não há brilho neon nem halo colorido de deslocamento zero (a única sombra colorida é a do logotipo original).

### Shadow Vocabulary
- **Painel flutuante** (`box-shadow: 0 40px 80px -30px rgba(0,0,0,.7)`): o cartão da conversa de exemplo.
- **Botão primário** (`0 10px 26px -12px rgba(0,201,167,.65)`): sombra tingida de teal com deslocamento e raio negativo, intensificada no hover.
- **Logotipo** (`0 3px 14px rgba(91,200,200,.55)`): herdada do site anterior e preservada.

### Named Rules
**The Tonal First Rule.** Primeiro se resolve a hierarquia com camadas de navy e hairlines; sombra é o último recurso.

## Shapes

Três raios com regra fixa: botões em pílula (9999px), superfícies e cartões em 24px (accordion em 16px, ícones de contato em 12px), campos de formulário em 12px. Nada de cantos agudos misturados a pílulas. O cubo isométrico do logotipo aparece só no logotipo; ele não é reaproveitado como ornamento.

## Components

### Buttons
- **Shape:** pílula (9999px), altura mínima de 48px, texto em caixa normal com ícone Phosphor à esquerda.
- **Primary:** fundo `teal`, texto `ink`, padding 12px 24px, sombra tingida. Hover sobe 2px e clareia para #14dbb8; `:active` reduz para 97%.
- **Ink:** fundo `ink` com texto `paper`, usado apenas sobre a faixa teal.
- **Quiet:** texto `paper` a 75%, sem fundo, vira teal no hover.

### Cards / Containers (tile)
- **Corner Style:** 24px.
- **Background:** `mid` entre 40% e 55%, com variações reais por célula (gradiente de teal, gradiente de azul, tinta forte de teal no destaque).
- **Border:** 1px `paper` a 10%; vira teal a 45% no hover.
- **Internal Padding:** 28px no celular, 36px a partir de 640px.

### Inputs / Fields
- **Style:** fundo `ink` a 60%, borda `paper` a 15%, raio 12px, rótulo sempre acima.
- **Focus:** borda teal e anel de 3px em teal a 18%. Erro: borda #ff8e8e e mensagem #ffb4b4 abaixo do campo, anunciada por `role="alert"`.

### Navigation
- Barra fixa de 68px em uma linha, transparente no topo e `ink` a 85% com blur ao rolar. Links em 14px, sublinhado teal que se desenha no hover; um único botão teal à direita. Abaixo de 1024px, botão hambúrguer de 44px abre menu de tela cheia com links em Syne 700 e entrada escalonada de 50ms.

### Conversa de exemplo (componente de assinatura)
Cartão de 400px que mostra um agente de IA marcando um horário no WhatsApp: mensagens recebidas em `paper` a 10%, enviadas em teal com texto `ink`, horários em numerais tabulares. É ilustrativo e sempre vem com a legenda "Exemplo ilustrativo". Toca uma vez ao carregar.

## Do's and Don'ts

### Do:
- **Do** manter o logotipo original (`assets/logo.svg`) em 42px com a sombra original; o wordmark "TeoCode" em Syne 800, 1.4rem, branco.
- **Do** usar teal só em ações e no destaque; texto sobre teal é `ink`.
- **Do** manter todo CTA como link `wa.me` com mensagem contextual em `data-wa` e um nome único em `data-gc-event`.
- **Do** manter conteúdo visível por padrão e respeitar `prefers-reduced-motion` (fades curtos, sem deslocamento).
- **Do** manter hover abaixo de 300ms, com `:active` em 97%.

### Don't:
- **Don't** inventar avaliações, números, preços ou clientes; o que não existe é descrito como pendência, não preenchido.
- **Don't** usar rótulos em caixa alta acima de títulos, texto com gradiente, emoji como ícone, travessão ou ponto médio em texto.
- **Don't** alterar, redesenhar ou restilizar o logotipo.
- **Don't** inverter seções para o tema claro nem introduzir uma segunda cor de ação.
