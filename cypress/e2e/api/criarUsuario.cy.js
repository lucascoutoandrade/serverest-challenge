import { criarUsuario } from '../../support/api/requests';

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
});
