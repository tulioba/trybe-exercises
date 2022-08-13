window.onload = function () {
  let select = document.getElementById("select");
  select.addEventListener("change", function () {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;
    localStorage.setItem("background-Color", selected.value);
    

  });

  let select2 = document.getElementById("select2");
  select2.addEventListener("change", function () {
    let texto = document.getElementById("texto");
    let selected2 = select2.selectedOptions[0];
    texto.style.color = selected2.value;
    localStorage.setItem("font-Color", selected2.value)
    


  });
  let savedFontSize = document.getElementById("fontSize");
  fontSize.addEventListener("change", function () {
    let texto = document.getElementById("texto");
    document.body.style.fontSize = `${fontSize.value}px`;
    localStorage.setItem("font-Size", `${fontSize.value}px`)
  });


// BACKGROUND-COLOR
  let savedBackgroundColor = localStorage.getItem("background-Color");
  document.body.style.backgroundColor = savedBackgroundColor;
// FONT-COLOR
  let savedFontColor = localStorage.getItem("font-Color");
  texto.style.color = savedFontColor;
// FONT-SIZE
  let savedFontSize = localStorage.getItem("font-Size");
  document.body.style.fontSize = savedFontSize
};
