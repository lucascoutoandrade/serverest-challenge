import { faker } from '@faker-js/faker';
import loginPage from '../pages/LoginPage';
import { buildProdutoFromFixture, buildUsuarioFromFixture } from './api/dataBuilder';
import { loginApi } from './api/requests';

Cypress.Commands.add('login', () => {
  cy.fixture('frontend/login').then((login) => {
    cy.session('admin', () => {
      loginPage.acessarLogin();
      loginPage.preencherEmail(login.email);
      loginPage.preencherSenha(login.senha);
      loginPage.clicarEntrar();
      cy.get('[data-testid="logout"]').should('be.visible');
    });
  });

  cy.visit('/admin/home');
});

Cypress.Commands.add('buildUsuario', () => {
  return cy.fixture('frontend/usuario').then((base) => ({
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: base.senha,
  }));
});

Cypress.Commands.add('buildProduto', () => {
  return cy.fixture('frontend/produto').then((base) => ({
    nome: faker.commerce.productName(),
    preco: faker.number.int(base.preco),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.number.int(base.quantidade),
  }));
});

Cypress.Commands.add('buildUsuarioApi', () => {
  return cy.fixture('api/usuario').then((base) => buildUsuarioFromFixture(base));
});

Cypress.Commands.add('buildProdutoApi', () => {
  return cy.fixture('api/produto').then((base) => buildProdutoFromFixture(base));
});

Cypress.Commands.add('apiLogin', () => {
  return cy.fixture('api/login').then((credentials) =>
    loginApi(credentials).then((response) => response.body.authorization),
  );
});
