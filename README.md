# 🔐 React Google Authenticator (Projeto de Estudo)

Este projeto foi desenvolvido com o objetivo **exclusivo de estudo e prática**, focando na implementação de **autenticação de usuários utilizando o Google Authenticator (Google OAuth 2.0)** em uma aplicação **React**.

A aplicação é simples e direta, composta por apenas duas páginas principais, permitindo compreender com clareza o fluxo de autenticação sem a complexidade de um backend.

---

## 🎯 Objetivo do Projeto

* Praticar autenticação com **Google OAuth 2.0**
* Entender o fluxo de login via Google em aplicações React
* Trabalhar com **JWT (JSON Web Token)** retornado pelo Google
* Simular controle de sessão no frontend
* Estruturar um projeto React simples e organizado

---

## 🧩 Funcionalidades

* ✅ Login com conta Google
* ✅ Captura de dados básicos do usuário (nome, e-mail e foto)
* ✅ Armazenamento de sessão no `localStorage`
* ✅ Página Home acessível apenas após login
* ✅ Logout do usuário

---

## 🖥️ Telas da Aplicação

### 🔑 Página de Login

* Exibe o botão **"Entrar com Google"**
* Inicia o fluxo de autenticação utilizando o Google

### 🏠 Página Home

* Exibe informações básicas do usuário autenticado
* Permite realizar logout

---

## 🛠️ Tecnologias Utilizadas

* **React**
* **Vite** (ambiente de desenvolvimento)
* **Google Identity Services**
* **JWT Decode**
* **HTML5 / CSS3**
* **JavaScript (ES6+)**

---

## 📁 Estrutura do Projeto

```
src/
 ├─ assets/
 │   └─ google.png
 ├─ Pages/
 │   ├─ Login/
 │   │   ├─ Login.jsx
 │   │   └─ Login.css
 │   └─ Home/
 │       └─ Home.jsx
 ├─ components/
 │   └─ ProtectedRoute.jsx
 ├─ main.jsx
 └─ App.jsx
```

---

## 🔐 Autenticação

A autenticação é feita utilizando o **Google OAuth 2.0**, onde:

1. O usuário clica em **Entrar com Google**
2. O Google retorna um **token JWT**
3. O token é decodificado no frontend
4. Os dados do usuário são armazenados no `localStorage`
5. O acesso à página Home é liberado

> ⚠️ Este projeto **não possui backend**. Toda a autenticação é simulada no frontend, com fins educacionais.

---

## 🚀 Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 📚 Aprendizados

Com este projeto foi possível praticar:

* Integração com serviços externos (Google)
* Uso de autenticação OAuth
* Controle de rotas protegidas no React
* Organização de componentes e páginas
* Boas práticas em projetos de estudo

---

## 📌 Observação

Este projeto **não deve ser utilizado em produção**, pois não possui validação de token no backend nem camadas avançadas de segurança.

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de **aprendizado e prática em React**.

---
