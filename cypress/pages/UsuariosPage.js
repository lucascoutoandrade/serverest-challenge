class UsuarioPage {

    acessarCadastro() {
       // cy.contains(`Cadastrar Usuários`).click();
       cy.get(`a[data-testid='cadastrar-usuarios']`).click();
    }

    validarPageCadastro() {
        cy.get(`h1`).should('contain', `Cadastro de usuários`);
    }

    preencherNome(nome) {
        cy.get(`input[name='nome']`).type(nome);
    }

    preencherEmail(email) {
        cy.get(`input[name='email']`).type(email);
    }

    preencherSenha(senha) {
        cy.get(`input[name='password']`).type(senha);
    }
    clicarSubmit() {
        cy.get(`button[type='submit'`).click();
    }

    validarPageListaDosUsuarios() {
        cy.get(`h1`).should('contain', 'Lista dos usuários');
    }

    validarUsuarioCriado(nome) {
        cy.get('table').contains(nome).should('exist');
    }

    cadastrarUsuario(nome, email, senha) {
    this.acessarCadastro();
    this.preencherNome(nome);
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.clicarSubmit();
  }
}
export default new UsuarioPage();