import produtosPage from '../../pages/ProdutosPage';

describe('Frontend - Produtos', () => {
  beforeEach(() => {
    cy.login();
    cy.buildProduto().as('produto');
  });

  it('@produtos - deve cadastrar produto e validar na lista', function () {
    const { nome, preco, descricao, quantidade } = this.produto;

    produtosPage.cadastrarProduto({ nome, preco, descricao, quantidade });
    produtosPage.validarPageListaDosProdutos();
    produtosPage.validarProdutoCriado(nome);
  });
});
