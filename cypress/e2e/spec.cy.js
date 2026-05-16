/// <reference types="cypress" />

describe('Challenge Serverest ', () => {

  const nomeAleatorio = gerarNomeAleatorio(10);

  beforeEach(() => {

    cy.visit('https://front.serverest.dev/admin/home')

    cy.get(`input[name='email']`).type(`fulano@qa.com`);

    cy.get(`input[name='password']`).type(`teste`);

    cy.get(`button[type='submit']`).click();

    cy.get(`button[data-testid='logout']`).should(`be.visible`);

  });

  it(`Cadastrar Usuario`, () => {

    cy.contains(`Cadastrar Usuários`).click();

    cy.get(`h1`).should('contain', `Cadastro de usuários`);

    cy.get(`input[name='nome']`).type(nomeAleatorio);

    cy.get(`input[name='email']`).type(nomeAleatorio + "@test.com");

    cy.get(`input[name='password']`).type(`teste`);

    cy.get(`button[type='submit'`).click();

    cy.get(`h1`).should('contain', 'Lista dos usuários');

    cy.get('table').contains(nomeAleatorio).should('exist');


  });


  it(`Listar Usuario`, () => {


  })

  it(`Cadastrar Produtos`, () => {



  });

  it(`Listar Produtos`, () => {



  })

  function gerarNomeAleatorio(tamanho) {

    return Math.random().toString(36).substring(2, 2 + tamanho);

  }

});