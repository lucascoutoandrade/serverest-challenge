import { faker } from '@faker-js/faker';
import produtosPage from '../../pages/ProdutosPage';

describe('Produtos', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Listar Produto', () => {
        const nome = faker.commerce.productName();
        const preco = faker.number.int({ min: 1, max: 9999 });
        const descricao = faker.commerce.productDescription();
        const quantidade = faker.number.int({ min: 1, max: 100 });

        produtosPage.cadastrarProduto(nome, preco, descricao, quantidade);
        produtosPage.acessarLista();
        produtosPage.validarPageListaDosProdutos();
        produtosPage.validarProdutoCriado(nome);
    });
});
