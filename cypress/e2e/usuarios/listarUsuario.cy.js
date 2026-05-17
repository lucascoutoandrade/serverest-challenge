import usuariosPage from '../../pages/UsuariosPage';

describe('Usuarios', () => {
    beforeEach(() => {
        cy.login();
        cy.buildUsuario().as('usuario');
    });

    it('Listar Usuário', function () {
        const { nome, email, senha } = this.usuario;

        usuariosPage.cadastrarUsuario({ nome, email, senha });
        usuariosPage.validarPageListaDosUsuarios();
        usuariosPage.validarUsuarioCriado(nome);
    });
});
