# 🚀 Portfólio Profissional — Jair Victor Assis

Uma Single Page Application (SPA) moderna, responsiva e de alta performance desenvolvida para destacar hard skills, arquitetura de software, experiência profissional e projetos de pesquisa aplicada.

---

## 💻 Sobre o Projeto

O portfólio foi desenhado com foco em estética premium, utilizando um elegante tema **Dark Mode**, efeitos de **Glassmorphism**, animações fluidas e uma tipografia moderna. 

Toda a arquitetura do projeto foi construída seguindo as melhores práticas do **Angular 19** (com componentes Standalone e o novo Control Flow `@if`/`@for`) aliado ao **Tailwind CSS**.

---

## 🛠️ Tecnologias Utilizadas

- **Core Framework:** [Angular 19](https://angular.dev/) (Standalone Components, New Control Flow Syntax)
- **Estilização:** [Tailwind CSS 3](https://tailwindcss.com/) (Design System utilitário customizado)
- **Linguagem:** TypeScript 5.x
- **Tipografia:** Google Fonts ([Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono))
- **Icons & Assets:** Ícones SVG nativos inline e favicon customizado (`favicon.svg`)
- **Ferramentas de Build:** Angular CLI / Vite

---

## 📂 Estrutura de Diretórios

```text
Portfolio/
├── public/
│   ├── assets/
│   │   └── minha-foto.png       # Foto de perfil utilizada na seção Inicial/Sobre
│   ├── favicon.svg              # Ícone personalizado de marca da aba do navegador
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Menu de navegação superior responsivo
│   │   │   ├── hero/            # Seção Inicial / Sobre com foto de perfil e CTAs
│   │   │   ├── experience/      # Timeline de experiência profissional
│   │   │   ├── projects/        # Cards de projetos de pesquisa aplicada
│   │   │   ├── skills/          # Grid de habilidades técnicas agrupadas por área
│   │   │   └── contact/         # Rodapé e cards de contato (E-mail, Localização, Social)
│   │   ├── app.component.ts     # Componente raiz organizador das seções
│   │   ├── app.component.html
│   │   └── app.config.ts
│   ├── index.html               # Configurações de SEO e Meta tags
│   ├── main.ts
│   └── styles.css               # Importação do Tailwind, variáveis e animações globais
├── tailwind.config.js           # Paleta de cores da marca, fontes e keyframes de animação
├── angular.json
└── package.json
```

---

## 🎯 Seções da Aplicação

### 1. **Navegação (`/#sobre`)**
- Header fixo com efeito de vidro (*glassmorphism*) ativado no scroll.
- Marca pessoal **JV** em gradiente.
- Links com rolagem suave para cada seção.
- Botões diretos para GitHub e LinkedIn.
- Menu hambúrguer otimizado para dispositivos móveis.

### 2. **Sobre / Apresentação (`/#sobre`)**
- Foto de perfil centralizada com borda gradiente e efeito de brilho animado (*glow*).
- Indicador de status online em verde.
- Cargo principal: **Desenvolvedor de Software**.
- Resumo com foco no ecossistema **Java**, **Spring Boot**, **Microsserviços**, **Multicloud** e **IA/Edge Computing**.
- Badges de destaques rápidos e botões de chamada para ação (CTA).

### 3. **Experiência Profissional (`/#experiencia`)**
- Timeline interativa com indicador especial para a posição atual.
- **Claro Brasil / Ustore** *(Mai 2025 - Atual)*: Foco em extração de monolito para microsserviços e integração multicloud com NetBackup.
- **Sum Software** *(Fev 2025 - Abr 2025)*: Otimização de bancos de dados SQL, aplicações C# (WinForms) e micro-ORM Dapper.

### 4. **Projetos de Pesquisa Aplicada (`/#projetos`)**
- Cards informativos com acentos em gradiente.
- **Sistema de IA e Visão Computacional (IFPE)**: Suporte à decisão clínica em Edge Computing (Raspberry Pi 4), Java (Spring Boot), Python (FastAPI) e OpenFeign.
- **Blood Prediction Tool (IFPE)**: Gestão transfusional Full Stack em Python (Flask) com Machine Learning e Docker.

### 5. **Habilidades Técnicas (`/#habilidades`)**
Grid responsivo organizado em 4 categorias estratégicas:
- ⚙️ **Back-end & Arquitetura:** Java, Spring Boot, Spring Data JPA, Python, FastAPI, Flask, C#, Microsserviços, Clean Code, SOLID.
- ☁️ **Infraestrutura & Nuvem:** Docker, Linux, Edge Computing, Integrações Multicloud.
- 🗄️ **Bancos de Dados:** PostgreSQL, MySQL, SQL Server.
- 🎨 **Front-end:** Angular, React, JavaScript, HTML5/CSS3.

### 6. **Contato & Rodapé (`/#contato`)**
- Cards de acesso rápido com links `mailto:` diretos.
- Informações de e-mail (`jairassisdev@gmail.com`) e localização (`Recife, PE`).
- Rodapé com marca d'água, copyright atualizado dinamicamente e redes sociais.

---

## ⚡ Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (v18.x ou superior)
- **npm** (v9.x ou superior)

### 1. Clonar ou Acessar o Repositório
```bash
cd Portfolio
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
```bash
npm start
# ou
npx ng serve
```

Navegue até `http://localhost:4200/` no seu navegador. A aplicação será recarregada automaticamente se você alterar qualquer arquivo-fonte.

### 4. Gerar o Build de Produção
```bash
npm run build
```
Os arquivos otimizados para implantação serão gerados no diretório `dist/portfolio/`.

---

## 👤 Autor

**Jair Victor de Lima Assis**  
- 💼 LinkedIn: [linkedin.com/in/jair-victor](https://linkedin.com/in/jair-victor)  
- 🐙 GitHub: [github.com/JairAssisDev](https://github.com/JairAssisDev)  
- ✉️ E-mail: [jairassisdev@gmail.com](mailto:jairassisdev@gmail.com)  

---
*Desenvolvido com Angular 19 & Tailwind CSS.*
