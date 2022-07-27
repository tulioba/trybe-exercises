// Atividade 1
// const a = 4;
// const b = 9;
// adicao = a + b;
// console.log ("soma" + " " + "=" + " " + adicao);
// subtracao = a - b;
// console.log ("subração" + " " + "=" + " " + subtracao);
// multiplicacao = a * b;
// console.log ("multiplicação" + " " + "=" + " " + multiplicacao);
// divisao = a / b;
// console.log ("divisão" + " " + "=" + " " + divisao);
// modulo = a % b;
// console.log ("resto" + " " + "=" + " " + modulo);

// Atividade 2

// const a = 10;
// const b = 9;
// if (a > b) {
//     console.log ("const 'a' é maior que const 'b'");
// } else {
//     console.log ("const 'b' é maior que const 'a'");
// }

//atividade 3

// const num1 = 4;
// const num2 = 9;
// const num3 = 3;
// if (num1 > num2 && num1 > num3) {
//     console.log ("num1 é o maior dos números");
// } else if (num2 > num1 && num2 > num3) {
//     console.log ("num2 é o maior dos números");
// } else {
//     console.log ("num3 é o maior dos números");
// }

//atividade 4

// const valor = 23;
// if (valor > 0) {
//     console.log ("positive");
// } else if (valor < 0){
//     console.log ("negativo");
// } else {
//     console.log ("zero")
// }

//atividade 5

// const ang1 = 40;
// const ang2 = 60;
// const ang3 = 80;
// let soma = ang1 + ang2 + ang3;
// if (soma > 0 && soma === 180) {
//     console.log (true);
// } else if (soma > 0 && soma !== 180) {
//     console.log (false);
// } else {
//     console.log ("inválido")
// }

//atividade 6
// const peca = 'cavalo';
// switch (peca.toLowerCase()){
//     case 'torre':
//     console.log("A Torre movimenta-se any casas para frente, trás e lados");
//     break;
//     case 'peão':
//     console.log("O Peão movimenta-se uma casa para frente e lados");
//     break;
//     case "rei":
//     console.log("O Rei movimenta-se duas casas em todas as direções");
//     break;
//     case "bispo":
//     console.log("O Bispo movimenta-se any casas nas diagonais");
//     break;
//     case "rainha":
//     console.log("A Rainha movimenta-se any casas em todas direções");
//     break;
//     default:
//     console.log("Essa peça não existe nesse joguinho");
// }

//atividade 7

// let nota = 101;
// if (nota < 0 || nota > 100){
//     nota = "error";
// } else if (nota >= 90){
//     nota = "A";
// } else if (nota >= 80){
//     nota = "B";
//     } else if (nota >= 70){
//         nota = "C";
//     } else if (nota >= 60){
//         nota = "D";
//     } else if (nota >= 50){
//         nota = "E";
//     } else {
//         nota = "F"
//     }
//     console.log(nota)

// //atividade 8

// const num1 = 9;
// const num2 = 31;
// const num3 = 3;
// let resultado = true;
// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
//     resultado = true;
// } else {
//     resultado = false;
// }
// console.log(resultado)






// const num1 = 14;
// const num2 = 11;
// const num3 = 8;
// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//     console.log (true);
// } else {
//     console.log (false);
// }

//atividade 9

// const num1 = 14;
// const num2 = 11;
// const num3 = 8;
// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log (true);
// } else {
//     console.log (false);
// }

//atividade 10
// const custo = 30;
// const venda = 50;

// console.log (lucro)

// if (custo >= 0 && venda >= 0){
//     const lucro = venda - custo;
//     const lucrototal = lucro * 1000;
//     console.log(lucrototal);
// } else {
//     console.log("Error, os valores não podem ser negativos")
// }

//atividade 11

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88


// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 1900;
let salarioLiquido;

if (salarioBruto <= 1903.98){
    salarioLiquido = salarioBruto * 0.92;
} else if (salarioBruto <= 2594.92){
    salarioLiquido = salarioBruto * 0.91;
} else if (salarioBruto <= 5189.82){
    salarioLiquido = salarioBruto * 0.89;
} else {
    salarioLiquido = salarioBruto - 570.88;
}
// console.log(salarioLiquido)
if (salarioLiquido <= 1903.98){
    salarioLiquido = salarioLiquido;
} else if (salarioLiquido <= 2826.65){
    salarioLiquido = salarioLiquido * 0,925 + 142;
} else if (salarioLiquido <= 3751.05){
    salarioLiquido = salarioLiquido * 0.85 + 354;
} else if (salarioLiquido <= 4664.68){
    salarioLiquido = salarioLiquido * 0.775 + 636.13;
} else {
    salarioLiquido = salarioLiquido * 0.727 + 869.36;
}


console.log (salarioLiquido)







