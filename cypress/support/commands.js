import { faker } from '@faker-js/faker';
import loginPage from '../pages/LoginPage';

Cypress.Commands.add('login', () => {
  cy.fixture('login').then((login) => {
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
  return cy.fixture('usuario').then((base) => ({
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: base.senha,
  }));
});

Cypress.Commands.add('buildProduto', () => {
  return cy.fixture('produto').then((base) => ({
    nome: faker.commerce.productName(),
    preco: faker.number.int(base.preco),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.number.int(base.quantidade),
  }));
});
