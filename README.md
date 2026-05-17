# ServeRest — Automação E2E (Frontend + API)

Testes automatizados do [ServeRest](https://front.serverest.dev) com Cypress, cobrindo **frontend** e **API** ([Swagger](https://serverest.dev/)).

## Pré-requisitos

- [Node.js](https://nodejs.org/) **18 ou superior**
- [npm](https://www.npmjs.com/)
- Conexão com a internet

## Como executar

```bash
git clone https://github.com/lucascoutoandrade/serverest-challenge.git
cd serverest-challenge
npm install
npm test
```

| Comando | Descrição |
|---------|-----------|
| `npm test` | Todos os testes (frontend + API) em headless |
| `npm run test:open` | Cypress Test Runner (modo interativo) |
| `npx cypress run --spec "cypress/e2e/api/**/*.cy.js"` | Somente testes de API |
| `npx cypress run --spec "cypress/e2e/auth/**/*.cy.js,cypress/e2e/usuarios/**/*.cy.js,cypress/e2e/produtos/**/*.cy.js"` | Somente frontend |

## Cenários de teste

### Frontend (3)

| # | Cenário | Spec |
|---|---------|------|
| 1 | Login válido | `cypress/e2e/auth/login.cy.js` |
| 2 | Cadastro de usuário e validação na lista | `cypress/e2e/usuarios/cadastrarUsuario.cy.js` |
| 3 | Cadastro de produto e validação na lista | `cypress/e2e/produtos/cadastrarProduto.cy.js` |

### API (3)

| # | Cenário | Spec |
|---|---------|------|
| 1 | POST `/usuarios` — status 201 | `cypress/e2e/api/criarUsuario.cy.js` |
| 2 | GET `/usuarios` — usuário criado na lista | `cypress/e2e/api/listarUsuarios.cy.js` |
| 3 | POST `/produtos` + GET `/produtos` — produto na lista | `cypress/e2e/api/produtos.cy.js` |

## Estrutura do projeto

```
cypress/
├── e2e/
│   ├── api/                 # Testes de API
│   ├── auth/                # Login (frontend)
│   ├── usuarios/            # Usuários (frontend)
│   └── produtos/            # Produtos (frontend)
├── fixtures/
│   ├── api/                 # Dados para API
│   ├── login.json           # Credenciais frontend
│   ├── usuario.json
│   └── produto.json
├── pages/                   # Page Objects (frontend)
└── support/
    ├── api/
    │   ├── requests.js      # Requisições HTTP
    │   └── dataBuilder.js   # Geração de dados (Faker)
    └── commands.js          # cy.login, cy.buildUsuario, etc.
```

## Credenciais

- **Frontend/API:** `fulano@qa.com` / `teste` (fixtures `login.json` e `api/login.json`)

## URLs

- Frontend: https://front.serverest.dev
- API: https://serverest.dev
