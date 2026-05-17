import { faker } from '@faker-js/faker';
import usuariosPage from '../../pages/UsuariosPage';

describe('Usuarios', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Listar Usuário', () => {
        const nome = faker.person.fullName();
        const email = faker.internet.email();

        usuariosPage.cadastrarUsuario(nome, email, 'teste');
        usuariosPage.validarPageListaDosUsuarios();
        usuariosPage.validarUsuarioCriado(nome);
    });
});
