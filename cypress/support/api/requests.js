const apiUrl = () => Cypress.env('apiUrl');

export function loginApi(credentials) {
  return cy.request({
    method: 'POST',
    url: `${apiUrl()}/login`,
    body: credentials,
  });
}

export function criarUsuario(usuario) {
  return cy.request({
    method: 'POST',
    url: `${apiUrl()}/usuarios`,
    body: usuario,
  });
}

export function listarUsuarios() {
  return cy.request({
    method: 'GET',
    url: `${apiUrl()}/usuarios`,
  });
}

export function criarProduto(produto, token) {
  return cy.request({
    method: 'POST',
    url: `${apiUrl()}/produtos`,
    body: produto,
    headers: {
      Authorization: token,
    },
  });
}

export function listarProdutos() {
  return cy.request({
    method: 'GET',
    url: `${apiUrl()}/produtos`,
  });
}
