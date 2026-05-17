import { criarProduto, listarProdutos } from '../../support/api/requests';

describe('API - Produtos', () => {
  it('Deve criar produto via POST /produtos e exibir no GET /produtos', () => {
    cy.apiLogin().then((token) => {
      cy.buildProdutoApi().then((produto) => {
        criarProduto(produto, token).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.message).to.eq('Cadastro realizado com sucesso');
          expect(response.body).to.have.property('_id');
        });

        listarProdutos().then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('produtos');

          const produtoEncontrado = response.body.produtos.find(
            (item) => item.nome === produto.nome,
          );

          expect(produtoEncontrado).to.exist;
          expect(produtoEncontrado.preco).to.eq(produto.preco);
          expect(produtoEncontrado.quantidade).to.eq(produto.quantidade);
        });
      });
    });
  });
});
