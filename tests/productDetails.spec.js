const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  //it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    it('Verifica se productDetails é uma função', () => {
      expect(typeof productDetails).toBe('function')
    });
    // Teste se o retorno da função é um array.
    it ('Verifica se o retorno da função é um array', () => {
      expect(Array.isArray(productDetails())).toBeTruthy();
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    it ('Verifica se a função contem dois itens', () => {
      expect(productDetails('arroz','batata').length).toEqual(2)
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it ('Verifica se os itens dentro do array retornados são objetos', () => {
      expect(typeof productDetails()).toBe('object');
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it ('Verifica se passado dois parâmetros diferentes, os dois objetos são diferentes', () => {
      expect(productDetails('arroz','batata')[0].name).toBe('arroz');
      expect(productDetails('arroz','batata')[1].name).not.toBe('arroz');
    });
    // Teste se os dois productIds terminam com 123.
     expect(productDetails('arroz','batata')[0].details.productId).toBe('arroz123');
     expect(productDetails('arroz','batata')[1].details.productId).toBe('batata123');
  });