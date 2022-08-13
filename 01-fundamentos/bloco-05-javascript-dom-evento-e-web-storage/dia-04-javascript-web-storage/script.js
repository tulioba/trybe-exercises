let titulo = document.getElementById("titulo");
let textos = document.getElementById("mudaCorTexto");
let titleColor = document.getElementById("input");
let textColor = document.getElementById("input2");
let zoomSize = document.getElementById("input3");
let body = document.getElementsByTagName("body");

titleColor.addEventListener("input", function () {
  let valor = titleColor.value;
  let corTitulo = (titulo.style.color = valor);
  localStorage.setItem("titleColor", JSON.stringify(corTitulo));
  window.onload = localStorage.getItem(titleColor);
});

textColor.addEventListener("input", function () {
  let valor = textColor.value;
  let corTextos = (textos.style.color = valor);
  localStorage.setItem("textColor", JSON.stringify(corTextos));
});

zoomSize.addEventListener("input", function () {
  let valor = zoomSize.value;
  let ampliar = (textos.style.fontSize = valor);
  localStorage.setItem("zoomSize", JSON.stringify("ampliar"));
});

