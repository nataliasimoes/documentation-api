# 📘 Documentação da API - Stardew Valley (Projeto Acadêmico)

Esta documentação foi desenvolvida utilizando o **VuePress 1.8.0** e tem como objetivo **auxiliar o uso da API** criada pela aluna **Francisca Natália Simões de Araújo**, como parte da disciplina de **Programação Web**.

---

## 🎮 Sobre a API

A API foi inspirada no jogo de videogame [**Stardew Valley**](https://www.stardewvalley.net/), um RPG de simulação criado por Eric Barone. O jogo simula a vida no campo, onde o jogador herda uma fazenda e realiza diversas atividades para ganhar dinheiro e expandir suas construções.

A API foca em uma dessas atividades: **compra, alocação e gerenciamento de animais**. Ao adquirir um animal, o jogador precisa escolher um local adequado onde ele será colocado (por exemplo, **vacas** no **celeiro** e **galinhas** no **galinheiro**).

---

## 🐄 Estrutura da API

A estrutura básica do banco de dados da API foi modelada com duas entidades principais:

- **Animal**  
  Representa os animais adquiridos pelo jogador.

- **Local**  
  Representa os locais disponíveis na fazenda (celeiro, galinheiro, etc).

A relação entre essas entidades é de **1:N (um para muitos)**:
- Cada **local** pode conter **vários animais**;
- Cada **animal** pertence a **um único local**.

---

## 🛠️ Tecnologias utilizadas

- [VuePress 1.8.0](https://v1.vuepress.vuejs.org/)
- Node.js (versão compatível recomendada: 14.x ou 16.x)

---

## 🚀 Como executar localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento do VuePress:**

   ```bash
   npm run docs:dev
   ```

4. Acesse em: http://localhost:8080

---

## 📂 Estrutura do Projeto

   ```bash 
  ├── docs/
  │   ├── .vuepress/      # Configurações do VuePress
  │   ├── README.md       # Página inicial da documentação
  │   ├── api/            # Seções da documentação da API
  │   └── ...
  ├── package.json
  └── README.md           # Este arquivo
  ```

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e não possui fins comerciais. Stardew Valley é uma criação de ConcernedApe (Eric Barone), e todos os direitos sobre o jogo pertencem ao autor.
