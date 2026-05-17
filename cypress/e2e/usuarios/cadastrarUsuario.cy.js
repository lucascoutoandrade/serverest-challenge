import usuariosPage from '../../pages/UsuariosPage';

describe('Frontend - Usuários', () => {
    beforeEach(() => {
        cy.login();
        cy.buildUsuario().as('usuario');
    });

    it('Deve cadastrar usuário e validar na lista', function () {
        const { nome, email, senha } = this.usuario;

        usuariosPage.cadastrarUsuario({ nome, email, senha });
        usuariosPage.validarPageListaDosUsuarios();
        usuariosPage.validarUsuarioCriado(nome);
    });
});
