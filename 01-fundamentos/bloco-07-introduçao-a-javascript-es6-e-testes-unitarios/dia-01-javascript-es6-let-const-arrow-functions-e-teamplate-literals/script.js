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


const testingScope = (escopo) => {
  if (escopo === true) {
    let IfScope = "Não devo ser utilizada fora do meu escopo(if)";
    IfScope = `${IfScope} ótimo. fui utilizada no escopo !`;
    console.log(IfScope);
  } else {
    const elseScope = "Não devo ser utilizada fora do meu escopo (else)";
    console.log(elseScope)
  }
}




testingScope(false);