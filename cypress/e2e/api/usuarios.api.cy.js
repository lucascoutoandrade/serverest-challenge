import { criarUsuario, listarUsuarios } from '../../support/api/requests';

describe('API - Usuários', () => {
  it('Deve criar usuário via POST /usuarios e retornar status 201', () => {
    cy.buildUsuarioApi().then((usuario) => {
      criarUsuario(usuario).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');
      });
    });
  });

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
