class ProdutosPage {

    acessarCadastro() {
        cy.get('a[data-testid="cadastrar-produtos"]').click();
    }

    acessarLista() {
        cy.get('a[data-testid="listar-produtos"]').click();
    }

    validarPageCadastro() {
        cy.get('h1').should('contain', 'Cadastro de produtos');
    }

    preencherNome(nome) {
        cy.get('input[name="nome"]').type(nome);
    }

    preencherPreco(preco) {
        cy.get('input[name="price"]').type(String(preco));
    }

    preencherDescricao(descricao) {
        cy.get('textarea[name="description"]').type(descricao);
    }

    preencherQuantidade(quantidade) {
        cy.get('input[name="quantity"]').type(String(quantidade));
    }

    clicarSubmit() {
        cy.get('button[type="submit"]').click();
    }

    validarPageListaDosProdutos() {
        cy.get('h1').should('contain', 'Lista dos Produtos');
    }

    validarProdutoCriado(nome) {
        cy.get('table').contains(nome).should('exist');
    }

    cadastrarProduto({ nome, preco, descricao, quantidade }) {
        this.acessarCadastro();
        this.preencherNome(nome);
        this.preencherPreco(preco);
        this.preencherDescricao(descricao);
        this.preencherQuantidade(quantidade);
        this.clicarSubmit();
    }
}

export default new ProdutosPage();
