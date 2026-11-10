<div align="center">

# Master Office

**Página de vendas de um curso prático de Pacote Office (Word, Excel e PowerPoint), com apostila em PDF, aplicativo web e módulos bônus.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome_6-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

</div>

<p align="center">
  <img src="docs/preview-desktop.webp" width="72%" alt="Página do Master Office no computador">
  <img src="docs/preview-mobile.webp" width="22%" alt="Página do Master Office no celular">
</p>

## Sobre

O Master Office é um produto digital para quem quer dominar Word, Excel e PowerPoint no trabalho.
A página apresenta dois planos: o **Básico**, com a apostila em PDF, e o **Master Office**, que soma
os módulos por ferramenta, um aplicativo web de estudos e certificado de conclusão.

É uma página de resposta direta, no formato de funil de infoproduto: faixa de oferta no topo, prova
social em carrossel, mockups dos materiais, comparação de planos e um pop-up de upgrade para quem
escolhe o plano mais simples.

## Destaques

- **Pop-up de upgrade.** O botão do Plano Básico não vai direto ao checkout: abre um pop-up que
  oferece o plano completo com desconto. Aceitar leva a um checkout; recusar leva ao checkout do
  Básico. Clicar fora do conteúdo fecha o pop-up.
- **Carrosséis infinitos em CSS.** Prints de depoimentos e telas do aplicativo correm em laço contínuo
  (`@keyframes` com o conteúdo duplicado), sem biblioteca.
- **Apostila que folheia sozinha.** Um mockup de livro troca de página a cada 3 segundos, com fade.
- **Aplicativo em vídeo.** Uma moldura de celular toca em loop a demonstração do aplicativo web.
- **Módulos bônus em cards.** Windows, Excel, PowerPoint, Informática Básica e Word, cada um com capa
  e o que traz.
- **FAQ em acordeão** que fecha os outros itens quando um abre.
- **Botões com pulso** e imagens flutuando de leve, para chamar a atenção para a compra.
- **Medição.** Meta Pixel e scripts da UTMify (UTMs e pixel) no `<head>`.

## Seções da página

1. **Faixa de oferta**: aviso de oferta especial.
2. **Hero** (`#home`): selo de compra segura, título, mockup dos materiais, chamada para comprar e
   aviso de que o acesso chega pelo WhatsApp e pelo e-mail.
3. **Prova social** (`#prova-social`): carrossel de prints de depoimentos.
4. **O material definitivo**: carrossel com telas do aplicativo.
5. **Tudo para uma carreira de sucesso**: Excel, apresentações, documentos e produtividade.
6. **O que você vai receber** (`#oque-receber`): a apostila em PDF (com o livro folheando) e o
   aplicativo web, com jornada passo a passo, exercícios, acesso multiplataforma e certificado.
7. **Bônus**: os cinco módulos por ferramenta.
8. **Planos** (`#oferta`): Básico e Master Office lado a lado.
9. **Garantia de 7 dias**.
10. **Perguntas frequentes** (`#faq`): acesso, tempo de acesso, instalação do app, versão do Office e reembolso.
11. **Rodapé** e pop-up de upgrade.

## Tecnologias

| Camada | Ferramentas |
| --- | --- |
| Interface | HTML, CSS e JavaScript puros (sem framework e sem build) |
| Estilo | `css/style.css` com variáveis CSS, layout responsivo e animações em `@keyframes` |
| Ícones | Font Awesome 6 (CDN cdnjs) |
| Tipografia | Outfit (títulos) e Inter (texto), via Google Fonts |
| Medição | Meta Pixel, UTMify (UTMs e pixel) |
| Pagamento | Checkout externo nos botões de compra |
| Apoio | `data/parse.js` (Node) para extrair conteúdo de um modelo exportado do Elementor |

## Estrutura

```text
index.html          página
css/style.css       estilos, responsividade e animações
js/scripts.js       FAQ, pop-up de upgrade, livro que folheia e contador
img/                mockups, telas do app, capas dos bônus, prints e vídeo de demonstração
data/
  parse.js                              extrai títulos, textos, imagens e botões de um JSON do Elementor
  novo modelo de landing page-14jan.json  modelo exportado, usado como referência de estrutura
  extracted_content.json                saída do parse.js
docs/               prints usados neste README
```

## Como rodar localmente

Não há dependências nem build:

```bash
npx serve .
# ou
python -m http.server 8000
```

Para regerar o conteúdo extraído do modelo (dentro da pasta `data/`):

```bash
node parse.js
```

## Como editar

- **Links de compra**: `href` dos botões dos planos e dos dois botões do pop-up (`#btn-upsell-accept` e `#btn-upsell-decline`) no `index.html`.
- **Contador regressivo**: `js/scripts.js` já decrementa elementos com os ids `hours`, `minutes` e `seconds`; basta colocá-los na página.
- **Cores e espaçamentos**: variáveis no topo de `css/style.css` (o link do CSS leva `?v=` para furar o cache ao publicar).

## Deploy

Site estático: qualquer hospedagem estática publica a pasta como está.

---

<sub>Feito por [Matheus Mattos Chaves](https://matheusdev-lovat.vercel.app) · [GitHub](https://github.com/MatheusMattos-Dev)</sub>
