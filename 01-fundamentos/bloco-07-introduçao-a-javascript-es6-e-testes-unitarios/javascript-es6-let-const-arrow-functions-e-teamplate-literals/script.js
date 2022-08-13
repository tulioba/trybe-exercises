// ATIVIDADE 1

// 🚀 Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
// 1-Modifique a estrutura da função para que ela seja uma arrow function;
// 2-Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// 3-Modifique as concatenações para template literals.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }
 
// RESOLUÇÃO

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let IfScope = "Não devo ser utilizada fora do meu escopo(if)";
//     IfScope = `${IfScope} ótimo. fui utilizada no escopo !`;
//     console.log(IfScope);
//   } else {
//     const elseScope = "Não devo ser utilizada fora do meu escopo (else)";
//     console.log(elseScope)
//   }
// }
// testingScope(true);

// ATIVIDADE 2

// 🚀 Crie uma função que retorne um array em ordem crescente.

// 1-Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// 2-Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// 3-Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    const sortOddsAndEvens = (array) => {
      for (let index = 1; index < array.length; index += 1){
        for (let secIndex = 0; secIndex < index; secIndex += 1){
          if (array[index] < array[secIndex]){
            let position = array[index];
            array[index] = array[secIndex];
            array[secIndex] = position;
          }
        }
      }
      return array
    };
    console.log(sortOddsAndEvens(oddsAndEvens));
    
    
    // oddsAndEvens.sort((a, b) => a - b)









