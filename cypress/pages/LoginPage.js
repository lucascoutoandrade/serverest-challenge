class LoginPage {

    acessarLogin() {

        cy.visit('/admin/home');
    }
    preencherEmail(email) {
        cy.get(`input[name='email']`).type(email);
    }
    preencherSenha(senha) {
        cy.get(`input[name='password']`).type(senha);
    }
    clicarEntrar() {
        cy.get(`button[type='submit']`).click();
    }
    validarLogin() {

        cy.get(`button[data-testid='logout']`).should(`be.visible`);
    }

    login(email, senha) {

        this.acessarLogin();
        this.preencherEmail(email);
        this.preencherSenha(senha);
        this.clicarEntrar();
        this.validarLogin();
    }


}

export default new LoginPage();