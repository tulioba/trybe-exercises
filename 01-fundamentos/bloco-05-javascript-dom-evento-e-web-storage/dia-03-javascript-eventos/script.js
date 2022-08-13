function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 🚀 Exercício 1:

function createDaysOfMonth() {
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let getIDdays = document.getElementById("days");
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let dayOfMonth = decemberDaysList[index];
    let elementoDayOfMonth = document.createElement("li");
    elementoDayOfMonth.innerHTML = dayOfMonth;
    if (dayOfMonth === 24 || dayOfMonth === 31) {
      elementoDayOfMonth.className = "day holiday";
      getIDdays.appendChild(elementoDayOfMonth);
    } else if (dayOfMonth === 4 || dayOfMonth === 11 || dayOfMonth === 18) {
      elementoDayOfMonth.className = "day friday";
      getIDdays.appendChild(elementoDayOfMonth);
    } else if (dayOfMonth === 25) {
      elementoDayOfMonth.className = "day friday holiday";
      getIDdays.appendChild(elementoDayOfMonth);
    } else {
      elementoDayOfMonth.className = "day";
      getIDdays.appendChild(elementoDayOfMonth);
    }
  }
}
createDaysOfMonth();

// 🚀 Exercício 2:

function feriados(feriados) {
  let buttonsContainer =
    document.getElementsByClassName("buttons-container")[0];
  let botao = document.createElement("button");
  botao.id = "btn-holiday";
  botao.innerText = "Feriados";
  buttonsContainer.appendChild(botao);
}
feriados(feriados);

// 🚀 Exercício 3:

let botao = document.getElementById("btn-holiday");
botao.addEventListener("click", function () {
  let dayHoliday = document.getElementsByClassName("day holiday");
  for (let index = 0; index < dayHoliday.length; index += 1) {
    let diaFeriado = dayHoliday[index];
    // diaFeriado.style.background = "red";
    if (diaFeriado.style.background !== "red") {
      diaFeriado.style.background = "red";
    } else {
      diaFeriado.style.background = "rgb(238,238,238)";
    }
  }
});

// 🚀 Exercício 4:

function criaBotaoSextaFeira(diaDaSemana) {
  let buttonContainer = document.getElementsByClassName("buttons-container")[0];
  let botaoSextaFeira = document.createElement("button");
  botaoSextaFeira.innerText = diaDaSemana;
  botaoSextaFeira.id = "btn-friday";
  buttonContainer.appendChild(botaoSextaFeira);
}
criaBotaoSextaFeira("Sexta-Feira");

// 🚀 Exercício 5:

let valoresOriginais = [];
let dayFriday = document.getElementsByClassName("day friday");

for (let index = 0; index < dayFriday.length; index += 1) {
  let saveFriday = dayFriday[index].innerText;
  valoresOriginais[index] = saveFriday;
}
let botaoSextaFeira = document.getElementById("btn-friday");
botaoSextaFeira.addEventListener("click", function () {
  for (let index = 0; index < dayFriday.length; index += 1) {
    let saveFriday = dayFriday[index];
    if (saveFriday.innerText === "SEXTOU") {
      saveFriday.innerText = valoresOriginais[index];
    } else {
      saveFriday.innerText = "SEXTOU";
    }
  }
});

// 🚀 Exercício 6:

// let iDdays = document.getElementById ("days");
// iDdays.addEventListener("mouseover", function(){
//   event.target.style.fontWeight = "600";

// })

// iDdays.addEventListener("mouseleave", function(){
//   event.target.style.fontWeight = "200"
// })

// 🚀 Exercício 7:

function createTask(task) {
  let taskContainer = document.querySelector(".my-tasks");
  let nameOfTask = document.createElement("span");
  nameOfTask.innerText = task;
  taskContainer.appendChild(nameOfTask);
}
createTask("PIXEL ART");

// 🚀 Exercício 8:

function adicionaLengeda(color){
  let taskContainer = document.querySelector(".my-tasks");
  let newTask = document.createElement("div");
  newTask.className = "task";
  newTask.style.blackground = color;
  taskContainer.appendChild(newTask);
}
adicionaLengeda("green");

// 🚀 Exercício 9:








// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa,
//    atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

















