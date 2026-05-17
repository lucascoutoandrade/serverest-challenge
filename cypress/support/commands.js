import loginPage from '../pages/LoginPage';

Cypress.Commands.add('login', () => {

  cy.session('admin', () => {

    loginPage.acessarLogin();

    loginPage.preencherEmail('fulano@qa.com');

    loginPage.preencherSenha('teste');

    loginPage.clicarEntrar();

    cy.get('[data-testid="logout"]').should('be.visible');

  });

   cy.visit('/admin/home'); 

});