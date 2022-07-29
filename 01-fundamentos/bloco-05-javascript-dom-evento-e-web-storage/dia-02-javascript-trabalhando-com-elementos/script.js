let elementoH1 = document.createElement("h1");
  elementoH1.id = "titulo";
    elementoH1.innerText = "Exercício 5.2 - JavaScript"
      document.body.appendChild(elementoH1);

let elementoMain = document.createElement("main");
  elementoMain.className = "main-content";
    elementoMain.innerText = "Volta o cão arrependido, com suas orelhas tão fartas, com seu osso roído e com o rabo entre as patas";
      document.body.appendChild(elementoMain);      

let elementoSection = document.createElement("section");
  elementoSection.className = "center-content";
    elementoSection.innerText = "AS PESSOAS BOAS DEVEM AMAR SEUS INIMIGOS";
      elementoMain.appendChild(elementoSection);

let elementoP = document.createElement("p");
  elementoP.id = "paragrafo";
    elementoP.innerText = "NO KING RULES FOREVER MY SON";
      elementoSection.appendChild(elementoP);

let elementoSection2 = document.createElement("section");
  elementoSection2.className = "left-content";
    elementoMain.appendChild(elementoSection2);


let elementoSection3 = document.createElement("section");
  elementoSection3.className = "right-content";
    elementoMain.appendChild(elementoSection3);

let elementoImagem = document.createElement("img");
  elementoImagem.className = "small-image";
    elementoImagem.src = "https://picsum.photos/200";   
      elementoSection2.appendChild(elementoImagem);

let elementoUl = document.createElement("ul");
  elementoSection3.appendChild(elementoUl);    
    let listaDeNumero = ["um", "dois", "tres,", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
      for (let index in listaDeNumero){
        let elementoLI = document.createElement("li");
          elementoLI.innerText = listaDeNumero[index];
            elementoUl.appendChild(elementoLI);
        }
  
for (let index = 0; index < 3; index += 1){
  let elementoH3 = document.createElement("h3");
    elementoH3.innerText = `eu sou o número ${index}`;
      elementoH3.className = `description`;
        elementoMain.appendChild(elementoH3);
    }        
  
elementoH1.className = "title";
elementoMain.removeChild(elementoMain.firstElementChild.nextElementSibling);








// 1🚀 Adicione a tag elementoh1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
// 2🚀 Adicione a tag main com a classe main-content como filho da tag body;
// 3🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// 4🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// 5🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// 6🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// 7🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
//     Esse elemento deve ser filho do section criado no passo 5;
// 8🚀 Adicione uma listaDeNumero não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da listaDeNumero.
//     Essa lista deve ser filha do section criado no passo 6;
// 9🚀Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 10🚀 Adicione a classe title na tag h1 criada;
// 11🚀 Adicione a classe description nas 3 tags h3 criadas;
// 12🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// 13🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
// 14🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// 15🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
