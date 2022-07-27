// atividade 1

// let fatorial = 1;
// for (index = 10; index > 0; index -= 1){
//     fatorial *= index;
// }
// console.log(fatorial);

// atividade 2

// let word = 'tryber';
// let reverse = "";
// for (let index = word.length-1; index >= 0; index -= 1){
//   reverse = reverse + word[index];
// }
// console.log(reverse)

// atividade 3

// let array = ['java', 'javascript', 'python', 'html', 'css', 'eahe aehaeha'];
// let maiorPalavra = "";
// for (index = 0; index < array.length; index += 1){
//   if (array[index].length > maiorPalavra.length){
//       maiorPalavra = array[index];
//   }
// }
// console.log(maiorPalavra)

// let array = ['java', 'javascript', 'python', 'html', 'css', 'eahe aehaeha'];
// let menorPalavra = array[0];
// for (let index = 0; index < array.length; index += 1){
//     if (array[index].length < menorPalavra.length){
//         menorPalavra = array[index];
//     }
// }
// console.log(menorPalavra)

// atividade 4

// let maiorNumeroPrimo = 0;
// for (indexNumero = 2; indexNumero <= 50; indexNumero += 1){
//   let numerPrimo = true;
//     for (indexDivisor = 2; indexDivisor < indexNumero; indexDivisor += 1){
//       if (indexNumero % indexDivisor === 0){
//         numerPrimo = false;
//       }
//     }
//      if (numerPrimo){
//           maiorNumeroPrimo = indexNumero
//      } 
// }
// console.log(maiorNumeroPrimo)


















let numb = [1, 3, 5, 6, 33];
let apoi = "";
for (apoi of numb){
  console.log(apoi * 3)
}
