/// <reference types="cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })

  it('Login ServeRest', () => {

    cy.visit('https://front.serverest.dev/admin/home')

    cy.get(`input[name='email']`).type(`fulano@qa.com`);

    cy.get(`input[name='password']`).type(`teste`);

    cy.get(`button[type='submit']`).click();

    cy.get(`button[data-testid='logout']`).should(`be.visible`);

  })

})