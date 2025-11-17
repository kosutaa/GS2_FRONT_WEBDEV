# 🌐 GS - Plataforma "Futuro do Trabalho"
![Badge da Global Solution](https://img.shields.io/badge/Global_Solution-FIAP_2025-blue) ![Badge de Tecnologia](https://img.shields.io/badge/Tech-React_&_Tailwind-cyan)

Projeto desenvolvido para a Global Solution de Front-End e Web Development, do curso de Engenharia de Software da FIAP.

---

## 📋 Índice

* [1. Resumo do Projeto](#1-resumo-do-projeto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Tecnologias Utilizadas](#3-tecnologias-utilizadas)
* [4. Instalação do Projeto (Passo a Passo)](#4-instalação-do-projeto-passo-a-passo)
* [5. Usuários e Senhas](#5-usuários-e-senhas)
* [6. Integrantes](#6-integrantes)
* [7. Link do Repositório](#7-link-do-repositório)

---

## 1. Resumo do Projeto
[cite_start]Este projeto é uma **Single Page Application (SPA)** [cite: 15] [cite_start]desenvolvida em React, com o objetivo de simular uma plataforma web colaborativa, semelhante ao LinkedIn, focada no tema "O Futuro do Trabalho"[cite: 9, 12].

[cite_start]A aplicação exibe perfis de profissionais fictícios [cite: 15][cite_start], carregados a partir de um arquivo `db.json` local[cite: 27]. [cite_start]O principal objetivo é permitir a visualização e busca desses perfis, conectando competências e pessoas[cite: 9].

## 2. Funcionalidades
A plataforma implementa os seguintes requisitos:

* [cite_start]**Listagem de Perfis:** Exibição dos profissionais em formato de *Cards*[cite: 18].
* [cite_start]**Modal de Detalhes:** Ao clicar em um card, um modal interativo é aberto com informações completas do profissional (experiência, formação, soft skills, etc.)[cite: 19].
* [cite_start]**Busca Dinâmica:** Sistema de busca funcional que filtra os perfis em tempo real por nome, cargo ou tecnologia[cite: 25].
* [cite_start]**Dark Mode:** A aplicação possui um *toggle* para alternar entre o tema claro e escuro, com persistência no *localStorage*[cite: 28].
* [cite_start]**Botões Funcionais:** Os botões de "Recomendar" e "Enviar Mensagem" no modal são funcionais e disparam alertas ao usuário[cite: 24].
* [cite_start]**Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, utilizando Tailwind CSS[cite: 26].

## 3. Tecnologias Utilizadas
* [cite_start]**React (com Vite):** Biblioteca principal para a construção da SPA[cite: 16].
* [cite_start]**Tailwind CSS:** Framework CSS utility-first para estilização rápida e responsiva[cite: 16].
* **Heroicons:** Biblioteca de ícones (para Dark Mode, Busca, etc.).

## 4. Instalação do Projeto (Passo a Passo)
[cite_start]Para executar este projeto localmente, siga os passos abaixo[cite: 40]:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/kosutaa/GS2_FRONT_WEBDEV.git](https://github.com/kosutaa/GS2_FRONT_WEBDEV.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd GS2_FRONT_WEBDEV
    ```

3.  **Instale as dependências:**
    (Isso instalará o React, Tailwind e o Heroicons)
    ```bash
    npm install
    ```

4.  **Execute o projeto:**
    (A aplicação iniciará em `http://localhost:5173`)
    ```bash
    npm run dev
    ```

[cite_start]**Nota:** A pasta `node_modules` foi omitida do envio, conforme solicitado[cite: 36]. O `npm install` é obrigatório.

## 5. Usuários e Senhas
[cite_start]O projeto não possui sistema de autenticação ou login, portanto não existem usuários ou senhas para acesso[cite: 39].

## 6. Integrantes
| Nome | RM |
| :--- | :--- |
| Guilherme Moura Gama | RM: 562162 |
| Guilherme Ruiz Costa | RM: 563236 |

## 7. Link do Repositório
* [cite_start][https://github.com/kosutaa/GS2_FRONT_WEBDEV](https://github.com/kosutaa/GS2_FRONT_WEBDEV) [cite: 42]
