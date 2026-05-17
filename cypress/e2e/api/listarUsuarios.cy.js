import { criarUsuario, listarUsuarios } from '../../support/api/requests';

describe('API - Usuários', () => {
  it('Deve listar usuários via GET /usuarios e conter o usuário criado', () => {
    cy.buildUsuarioApi().then((usuario) => {
      criarUsuario(usuario).its('status').should('eq', 201);

      listarUsuarios().then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('usuarios');

        const usuarioEncontrado = response.body.usuarios.find(
          (item) => item.email === usuario.email,
        );

        expect(usuarioEncontrado).to.exist;
        expect(usuarioEncontrado.nome).to.eq(usuario.nome);
      });
    });
  });
});
