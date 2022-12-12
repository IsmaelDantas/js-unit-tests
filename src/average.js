/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (desiredArray) => {
   // 1 - Inicia variável soma com 0
   let sum = 0;
   // 2 - verifica se o array não é vazio
   if (desiredArray.length === 0) return undefined;
   for (let index = 0; index < desiredArray.length; index += 1) {
     // 3 - Verifica se os números do array são tipo number
     if (typeof desiredArray[index] !== 'number') return undefined;
     // 4 - Adiciona o valor do index do array no soma
     sum += desiredArray[index];
   }
   // 5 - Variável resultado será retornada com a média arredondada
   let result = sum / desiredArray.length;
   return Math.round(result);
};

module.exports = average;
