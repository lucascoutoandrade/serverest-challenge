import produtosPage from '../../pages/ProdutosPage';

describe('Produtos', () => {
    beforeEach(() => {
        cy.login();
        cy.buildProduto().as('produto');
    });

    it('Listar Produto', function () {
        const { nome, preco, descricao, quantidade } = this.produto;

        produtosPage.cadastrarProduto({ nome, preco, descricao, quantidade });
        produtosPage.acessarLista();
        produtosPage.validarPageListaDosProdutos();
        produtosPage.validarProdutoCriado(nome);
    });
});
