// EXERCICIO DE FIXAÇÃO >>>>>>>>>>>>>>>>>>>>>> OBJETOS

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };


// let player = {
//     name: "Maria",
//     lastName: "Silva",
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     }
// }
// player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e 3 ${player.medals.silver} medalhas de prata.`);

// let pizzas = {
//     sabor: "Palmito",
//     preco: 39.90,
//     bordaCatupiry: true,
// }

// // let key = "";
// // for (key in pizzas){
// //         console.log(key);
// // }
// let pizzasDoces = ["chocolate", "banana", "morango"];
// for (let key in pizzasDoces){
//     console.log(key, pizzasDoces[key]);
// }


// EXERCICIO DE FIXAÇÃO >>>>>>>>>>>>>>>>>>>>>> FOR IN | FOR OF


// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
//   for (let index in names){
//     console.log(`Olá ${names[index]}`);
//   }

// //   2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//   for (let index in car){
//     console.log(index, car[index]);
//   }


// // ===================================================================================================================================
//                                                                 OBJETOS
// // ATIVIDADE 1

// // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: "Bem-vinda, Margarida"
// // Copiar

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log(`Bem-vinda, ${info.personagem}`);

// ATIVIDADE 2

// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   info.recorrente = "Sim";
//   for (let key in info){
//     console.log(`${key}: ${info[key]}`);
//   }

// ATIVIDADE 3

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim',
//   };
//   for (let index in info){
//     console.log(index);
//   }

// ATIVIDADE 4

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim',
//   };
//   for (let index in info){
//     console.log(info[index]);
//   }

// ATIVIDADE 5

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:


// let infoTio = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell',
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim',
//   };
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim',
//   };
// for (let index in infoTio){
//     if (index === 'recorrente' &&
//         info[index] === 'sim' &&
//         infoTio[index] === 'sim'){
//             console.log('ambos recorrentes')
//         } else {
//             console.log(`${info[index]} e ${infoTio[index]}`);
//         }
// }

// ATIVIDADE 6,7 e 8

// 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos"

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   console.log(`O livro favorito de ${leitor.nome}${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`);

// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// }
// )
// console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)

                                                                                //FUNÇÕES

// // ATIVIDADE 1

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function palindromo(palavra){
//     for (let index in palavra){
//         if (palavra[index] === palavra.length - 1 - index){
//             return true;
//         } 
            
        
//     }
//     return false
// }
// console.log(palindromo("trybe"))

// ATIVIDADE 2

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.


// function maiorIndice(array){
//     let indiceMaior = 0;
//         for (let index in array){
//             if (array[indiceMaior] < array[index]){
//                 indiceMaior = index;
//             }
//         }
//                 console.log(indiceMaior);
//     }
//     maiorIndice([2, 3, 6, 7, 10, 1]);

// ATIVIDADE 3

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// function menorIndice(lista){
//     let menorIndice = 0;
//         for (let index in lista){
//             if (lista[index] < lista[menorIndice]){
//                 menorIndice = index
//             }
//         }
//                     console.log(menorIndice)
//     }
//     menorIndice([2, 4, 6, 7, 10, 0, -3])

// ATIVIDADE 4

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// function maiorQuantCaracteres(array){
//     maiorPalavra = array[0]
//         for (let index in array){
//             if (array[index].length > maiorPalavra.length){
//                     maiorPalavra = array[index];
//             }
//         }
//                         return maiorPalavra
//  }
// console.log(maiorQuantCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// ATIVIDADE 5                                                                      NAO ENTENDI

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// function numeroMaisRepetido(numeros){
//     let conteNumero = 0;
//         for (let index of numeros){
//             for (let indice of numeros){
//                 if (numeros[index] === numeros[indice]){
//                     conteNumero += 1
//                 }
//             }
//         }
// }
// console.log(numeroMaisRepetido([2, 3, 2, 5, 8, 2, 3]))

// ATIVIDADE 6 

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.

// function somaDeNumeros(numero){
//     let soma = 0;
//         for (let index = 1; index <= numero; index += 1){
//             soma += index;      
//         }
//                 return soma;
// }
// console.log(somaDeNumeros(5));


































