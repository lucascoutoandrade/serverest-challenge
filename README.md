# ServeRest — Automação E2E (Frontend + API)

Testes automatizados do [ServeRest](https://front.serverest.dev) com Cypress, cobrindo **frontend** e **API** ([Swagger](https://serverest.dev/)).

## Pré-requisitos

- [Node.js](https://nodejs.org/) **18 ou superior**
- [npm](https://www.npmjs.com/)
- Conexão com a internet

## Instalação

```bash
git clone https://github.com/lucascoutoandrade/serverest-challenge.git
cd serverest-challenge
npm install
```

## Scripts de execução

| Script | Descrição |
|--------|-----------|
| `npm run test:all` | Todos os testes (frontend + API) em headless |
| `npm test` | Alias para `test:all` |
| `npm run test:frontend` | Somente testes de frontend |
| `npm run test:api` | Somente testes de API |
| `npm run test:open` | Cypress Test Runner (modo interativo) |

### Filtrar por tags (`--grep`)

Cada teste possui uma tag no título (`@login`, `@usuarios`, `@produtos`). Use `--grep` para executar apenas os cenários desejados:

```bash
# Frontend — apenas testes de usuários
npm run test:frontend -- --grep "@usuarios"

# Frontend — apenas login
npm run test:frontend -- --grep "@login"

# API — apenas produtos
npm run test:api -- --grep "@produtos"

# Todos — filtrar por tag em frontend e API
npm run test:all -- --grep "@usuarios"
```

> O `--grep` é convertido para o plugin [@cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep), que filtra testes pelo texto do título.

### Tags disponíveis

| Tag | Frontend | API |
|-----|----------|-----|
| `@login` | `login.cy.js` | — |
| `@usuarios` | `usuarios.cy.js` | `usuarios.api.cy.js` (2 testes) |
| `@produtos` | `produtos.cy.js` | `produtos.api.cy.js` |

## Cenários de teste

### Frontend (3)

| # | Cenário | Spec |
|---|---------|------|
| 1 | Login válido | `cypress/e2e/frontend/login.cy.js` |
| 2 | Cadastro de usuário e validação na lista | `cypress/e2e/frontend/usuarios.cy.js` |
| 3 | Cadastro de produto e validação na lista | `cypress/e2e/frontend/produtos.cy.js` |

### API (3)

| # | Cenário | Spec |
|---|---------|------|
| 1 | POST `/usuarios` — status 201 | `cypress/e2e/api/usuarios.api.cy.js` |
| 2 | GET `/usuarios` — usuário criado na lista | `cypress/e2e/api/usuarios.api.cy.js` |
| 3 | POST `/produtos` + GET `/produtos` — produto na lista | `cypress/e2e/api/produtos.api.cy.js` |

## Estrutura do projeto

```
cypress/
├── e2e/
│   ├── frontend/
│   │   ├── login.cy.js
│   │   ├── usuarios.cy.js
│   │   └── produtos.cy.js
│   └── api/
│       ├── usuarios.api.cy.js
│       └── produtos.api.cy.js
├── fixtures/
│   ├── frontend/
│   │   ├── login.json
│   │   ├── usuario.json
│   │   └── produto.json
│   └── api/
│       ├── login.json
│       ├── usuario.json
│       └── produto.json
├── pages/                   # Page Objects (frontend)
└── support/
    ├── api/
    │   ├── requests.js      # Requisições HTTP
    │   └── dataBuilder.js   # Geração de dados (Faker)
    └── commands.js          # cy.login, cy.buildUsuario, etc.
scripts/
└── cypress-run.js           # Wrapper com suporte a --grep
```

## Credenciais

- **Frontend:** `fulano@qa.com` / `teste` (`fixtures/frontend/login.json`)
- **API:** `fulano@qa.com` / `teste` (`fixtures/api/login.json`)

## URLs

- Frontend: https://front.serverest.dev
- API: https://serverest.dev
