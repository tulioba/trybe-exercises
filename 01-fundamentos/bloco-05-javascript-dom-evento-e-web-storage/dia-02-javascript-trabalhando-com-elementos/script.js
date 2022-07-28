// 1 Acesse o elemento elementoOndeVoceEsta. >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 4 Acesse o primeiroFilho a partir de pai.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// 8 Agora acesse o terceiroFilho a partir de pai.


let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
  let pai = elementoOndeVoceEsta.parentElement;
    pai.style.backgroundColor = "orange";
      let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
        primeiroFilhoDoFilho.innerText = "EU SOU O FILHO DO FILHO";
          let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
            let textoAtencao = elementoOndeVoceEsta.nextSibling;
              let terceiroFilho = elementoOndeVoceEsta.previousElementSibling;
                let terceiroFilho2 = pai.lastElementChild.previousElementSibling
                  
                
                
                
                
                // 1 Crie um irmão para elementoOndeVoceEsta.
                let papai = document.getElementById("pai");
                  let irmaoDeOndeVoceEsta = document.createElement("section");
                    irmaoElementoDeOndeVoceEsta.id = "irmaoElementoDeOndeVoceEsta";
                      papai.appendChild(irmaoDeOndeVoceEsta);

                // 2 Crie um filho para elementoOndeVoceEsta.
                let irmaoDeOnde = document.getElementById("elementoOndeVoceEsta");
                  let filhoDeOndeVoceEsta = document.createElement("section");
                    filhoDeOndeVoceEsta.id = "filhoDeOndeVoceEsta";
                      irmaoDeOnde.appendChild = "filhoDeOndeVoceEsta";

                // 3 Crie um filho para primeiroFilhoDoFilho.      
                let firstSon = document.getElementById("primeiroFilho");
                  let sonOfFirstSon = document.createElement("section");
                    sonOfFirstSon.id = "sonOfFirstSon";
                      firstSon.appendChild(sonOfFirstSon);

                // 4 A partir desse filho criado, acesse terceiroFilho.
                let terceiroFilho3 = filhoDoPrimeiroFilhoDoPrimeiroFilho.parentElement.parentElement.nextSiblingElement;
                
                // 5 Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
                let father = document.getElementById("father");
                for (let index = father. length -1; index < 0; index -+ 1 ){
                      let currentChildren = father.childnodes[index];
                      if (currentChildren !== elementoOndeVoceEsta){
                        currentChildren.remove();
                      }
                }



                  

              




































