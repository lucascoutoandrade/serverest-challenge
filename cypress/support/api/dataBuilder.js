import { faker } from '@faker-js/faker';

export function buildUsuarioFromFixture(base) {
  return {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: base.password,
    administrador: base.administrador,
  };
}

export function buildProdutoFromFixture(base) {
  return {
    nome: faker.commerce.productName(),
    preco: faker.number.int(base.preco),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.number.int(base.quantidade),
  };
}
