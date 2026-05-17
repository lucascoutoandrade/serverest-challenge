# ServeRest — Automação E2E com Cypress

Testes end-to-end do [ServeRest](https://front.serverest.dev) com Cypress, Page Objects e Faker.

## Pré-requisitos

- [Node.js](https://nodejs.org/) **18 ou superior**
- [npm](https://www.npmjs.com/) (incluído com o Node.js)
- Conexão com a internet (os testes acessam `https://front.serverest.dev`)

## Como executar

```bash
# 1. Clonar o repositório
git clone <url-do-repositorio>
cd serveRest-project

# 2. Instalar dependências
npm install

# 3. Rodar todos os testes (headless)
npm test
```

### Outros comandos

| Comando | Descrição |
|---------|-----------|
| `npm test` | Executa todos os testes em modo headless |
| `npm run test:open` | Abre o Cypress Test Runner (modo interativo) |
| `npx cypress run` | Equivalente ao `npm test` |
| `npx cypress run --spec "cypress/e2e/auth/login.cy.js"` | Executa um spec específico |

## Credenciais de teste

O login usa o usuário padrão do ServeRest (definido em `cypress/support/commands.js`):

- **E-mail:** `fulano@qa.com`
- **Senha:** `teste`

## Cenários cobertos

1. Login válido
2. Cadastrar usuário (dados dinâmicos com Faker)
3. Listar usuário (validação na tabela)
4. Cadastrar produto (dados dinâmicos com Faker)
5. Listar produto (validação na tabela)

## Estrutura do projeto

```
cypress/
├── e2e/
│   ├── auth/           # Login
│   ├── usuarios/       # Cadastro e listagem de usuários
│   └── produtos/       # Cadastro e listagem de produtos
├── pages/              # Page Objects
├── support/            # Comandos customizados (cy.login)
└── fixtures/
cypress.config.js
package.json
```

## Solução de problemas

- **`npm install` falha:** verifique se o Node.js está na versão 18+ (`node -v`).
- **Cypress não encontrado:** execute `npm install` novamente na raiz do projeto.
- **Testes falham por timeout:** confirme acesso a `https://front.serverest.dev` e à API `https://serverest.dev`.
