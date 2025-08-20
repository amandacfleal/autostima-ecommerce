# Autostima - Loja de Moda Feminina

Um site de e-commerce simples e elegante focado em moda feminina, desenvolvido com HTML, CSS (Tailwind CSS) e JavaScript puro.

**[Acesse o projeto ao vivo aqui!](https://amandacfleal.github.io/autostima-ecommerce/)**

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Rodar o Projeto](#-como-rodar-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Processo de Desenvolvimento](#-processo-de-desenvolvimento)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🔭 Visão Geral

O Autostima é um projeto de e-commerce de moda feminina desenvolvido com o objetivo de criar uma plataforma visualmente atraente e funcional. O foco principal é a usabilidade e a experiência do utilizador (UX), garantindo que a navegação seja intuitiva e agradável.

Este repositório contém o código-fonte de uma página inicial (landing page) completa, que serve como base para um futuro e-commerce.

---

## ✨ Tecnologias Utilizadas

- **HTML5:** A base estrutural de toda a página.
- **CSS3:** Utilizado para estilização personalizada.
- **Tailwind CSS:** Framework de CSS para o desenvolvimento rápido e eficiente da interface.
- **JavaScript (ES6+):** Adiciona funcionalidades interativas, como o menu responsivo e o controlo de carrinho de compras.

---

## 🏗️ Arquitetura do Projeto

A arquitetura do projeto segue um modelo de arquivo único para o HTML (`index.html`), com a separação de estilos e scripts em pastas dedicadas para melhor organização e manutenção do código.

- **HTML:** O arquivo `index.html` é o ponto de entrada, organizando o conteúdo em secções claras (cabeçalho, secções principais, rodapé) com IDs para navegação suave.
- **CSS:** Os estilos são divididos em `style.css` (para estilos globais e layout) e `componentes.css` (para estilos de componentes reutilizáveis, como botões e cartões).
- **JavaScript:** Os scripts são separados em `main.js` (para funcionalidades gerais como o menu móvel e scroll suave) e `componentes.js` (para a lógica de renderização e interação de componentes específicos, como os cartões de produto).

Esta abordagem modular facilita a leitura e a escalabilidade do projeto.

---

## 📁 Estrutura do Projeto

autostima-ecommerce/
├── assets/
│   ├── images/
│   │   └── preview.png
│   └── icons/
│       └── svg-icons.svg
├── css/
│   ├── componentes.css
│   └── style.css
├── js/
│   ├── componentes.js
│   └── main.js
├── .gitignore
├── index.html
└── README.md
---

## 🚀 Como Rodar o Projeto

Para executar o projeto e vê-lo a funcionar, siga estas instruções simples:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/amandacfleal/autostima-ecommerce.git](https://github.com/amandacfleal/autostima-ecommerce.git)
    ```

2.  **Navegue para a pasta do projeto:**
    ```bash
    cd autostima-ecommerce
    ```

3.  **Abra o arquivo `index.html`:**
    Simplesmente abra o arquivo `index.html` no seu navegador web preferido (Chrome, Firefox, etc.).

> **Dica:** Use a extensão **Live Server** do VS Code para abrir o projeto em um servidor local e ter a funcionalidade de "live reload" (atualização automática ao salvar o arquivo).

---

## ⚙️ Funcionalidades

- **Seções de Navegação:**
  - **Hero Section:** Banner principal para destacar a nova coleção.
  - **Categorias em Destaque:** Cards visuais para as categorias mais populares.
  - **Lançamentos:** Cards de produtos para os itens mais recentes.
  - **Ofertas:** Cards de produtos para itens com desconto.

- **UI/UX:**
  - **Design Responsivo:** A interface adapta-se perfeitamente a todos os dispositivos.
  - **Micro-interações:** Efeitos de hover em botões, links e cards para uma experiência de usuário mais interativa.
  - **Navegação Suave:** Scroll suave entre as seções da página.

- **Rodapé Detalhado:**
  - Contém links úteis, formas de pagamento aceites e links para redes sociais.

---

## 🛠️ Processo de Desenvolvimento

Este projeto foi concebido e desenvolvido com base nas seguintes etapas:

1.  **Conceção e Wireframing:** Definição do layout e da estrutura da página.
2.  **Estrutura (HTML):** Criação da marcação semântica com HTML5.
3.  **Estilização (CSS/Tailwind):** Aplicação das classes do Tailwind para o layout inicial e posterior personalização com CSS.
4.  **Interatividade (JavaScript):** Implementação da lógica para a navegação e interações de front-end.
5.  **Refinamento:** Ajustes finos no design e otimização do código.

---

## 📜 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` no repositório.

---

## 👩‍💻 Autor

Desenvolvido por **Amanda Candido Franco Leal**.

- **GitHub:** [amandacfleal](https://github.com/amandacfleal)
- **Email:** amandalealcontato@gmail.com
