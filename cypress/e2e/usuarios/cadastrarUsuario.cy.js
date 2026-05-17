import { faker } from '@faker-js/faker';
import usuariosPage from '../../pages/UsuariosPage'

const nome = faker.person.fullName();
const email = faker.internet.email();

describe('Usuarios', () => {
    beforeEach(() => {

        cy.login();

    });

    it('Cadastrar Usuário', () => {

        usuariosPage.cadastrarUsuario(nome, email, 'teste');

        cy.contains('Lista dos usuários');

        usuariosPage.validarUsuarioCriado(nome);

    })

})