// atividade 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index+= 1){
//     console.log(numbers[index]);
// }

// atividade 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0
// for (let index = 0; index < numbers.length; index+= 1){
//     soma += numbers[index]
// }
// console.log(soma);

// atividade 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let media = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     media += (numbers[index] / numbers.length)
// }
// console.log(media);

// atividade 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let media = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     media += (numbers[index] / numbers.length)
// }
// if (media > 20){
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor que 20")
// }


// atividade 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // console.log(Math.max.apply(null, numbers)); ============>>>>>>> FORMA MAIS FÁCIL DE FAZER
// let maiorNumero = numbers[0];
// for (let index = 1; index < numbers.length; index += 1){
//     if (numbers[index] > maiorNumero){
//         maiorNumero = numbers[index];
//     }   
// }
// console.log(maiorNumero);

// atividade 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numeroImpar = [];
// for (let index = 0; index < numbers.length; index += 1){
//     if (numbers[index] % 2 !== 0){
//         numeroImpar += numbers[index]
//     }
// }
// if (numeroImpar === 0){
//     console.log("Nao tem numero ímpar");
// } else {
//     console.log(numeroImpar);
// }

// atividade 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numbers[0];
// for (let index = 1; index < numbers.length; index += 1){
//     if (menorValor > numbers[index]){
//         menorValor = numbers[index];
//     }
// }
// console.log(menorValor);

// atividade 8 

// let numeros = [];
// for (index = 0; index < 25; index += 1){
//     numeros.push(index);
// }
// console.log(numeros)
// for (index2 = 0; index2 < numeros.length; index2 += 1){
//     console.log(numeros[index] / 2)
// }

// atividade 9

// let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
// for (index = 0; index < numeros.length; index += 1){
//     console.log(numeros[index] / 2)
// }

// BÔNUS

// atividade 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1){
//     for (let index2 = 1; index2 < index; index2 += 1){
//         if (numbers[index] < numbers[index2]){
//             let ordenado = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = ordenado
//         } 
//     }
// }
// console.log(number)



                        // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; =======>>>>>> MELHOR FORMA DE ORDENAR
                        // console.log(numbers.sort(function(a, b){return a - b}))

// atividade 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1){
//     for (let index2 = 0; index2 < index; index2 += 1){
//         if (numbers[index] > numbers[index2]){
//             let ordenado = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = ordenado
//         } 
//     }
// }
// console.log(numbers)







