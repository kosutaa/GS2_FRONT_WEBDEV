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
Este projeto é uma **Single Page Application (SPA)** desenvolvida em React, com o objetivo de simular uma plataforma web colaborativa, semelhante ao LinkedIn, focada no tema "O Futuro do Trabalho".

A aplicação exibe perfis de profissionais fictícios, carregados a partir de um arquivo `db.json` local. O principal objetivo é permitir a visualização e busca desses perfis, conectando competências e pessoas.

## 2. Funcionalidades
A plataforma implementa os seguintes requisitos:

* **Listagem de Perfis:** Exibição dos profissionais em formato de *Cards*.
* **Modal de Detalhes:** Ao clicar em um card, um modal interativo é aberto com informações completas do profissional (experiência, formação, soft skills, etc.).
* **Busca Dinâmica:** Sistema de busca funcional que filtra os perfis em tempo real por nome, cargo ou tecnologia.
* **Dark Mode:** A aplicação possui um *toggle* para alternar entre o tema claro e escuro, com persistência no *localStorage*.
* **Botões Funcionais:** Os botões de "Recomendar" e "Enviar Mensagem" no modal são funcionais e disparam alertas ao usuário.
* **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, utilizando Tailwind CSS.

## 3. Tecnologias Utilizadas
* **React (com Vite):** Biblioteca principal para a construção da SPA.
* **Tailwind CSS:** Framework CSS utility-first para estilização rápida e responsiva.
* **Heroicons:** Biblioteca de ícones (para Dark Mode, Busca, etc.).

## 4. Instalação do Projeto (Passo a Passo)
Para executar este projeto localmente, siga os passos abaixo:

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

**Nota:** A pasta `node_modules` foi omitida do envio, conforme solicitado. O `npm install` é obrigatório.

## 5. Usuários e Senhas
O projeto não possui sistema de autenticação ou login, portanto não existem usuários ou senhas para acesso.

## 6. Integrantes
| Nome | RM |
| :--- | :--- |
| Guilherme Moura Gama | 562162 |
| Guilherme Ruiz Costa | 563236 |

## 7. Link do Repositório
* [https://github.com/kosutaa/GS2_FRONT_WEBDEV](https://github.com/kosutaa/GS2_FRONT_WEBDEV)
