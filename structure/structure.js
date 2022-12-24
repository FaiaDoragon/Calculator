import { div, mult, printNumbInput, reset, resta, suma } from "../functions/functions.js";
import { numberPad, operatorPad } from "../sources/sources.js";

//creacion de los botones numericos del 1 al 0 ademas del "." y el "="
//falta hacer que la funcion printNumbInput pueda ser ejecutada desde estos botones
export const buttons = numberPad.map(function (numberPad) {
  return `<button 
        id = "${numberPad.valor}" 
        class = '${numberPad.class}'>
        ${numberPad.valor}
        </button>`;
});

// creacion de los botones que funcionan como operadores +, -, /, *
//falta que las funciones del archivo functions.js puedan ser llamadas desde estos botones
export const operatorButtons = operatorPad.map(function (operatorPad) {
  return `<button 
        onkeydown = "'${operatorPad.operator}', ${operatorPad.operation}()" 
        class='${operatorPad.class}'>
        ${operatorPad.operator}
        </button>`;
});

//llamar a las funciones correspondientes al pulsar en el teclado +, -, / o *
input.addEventListener("keydown", (e) => {
  let operator = e.key;
  if (operator == "+") {
    suma();
  } else if (operator == "-") {
    resta();
  } else if (operator == "*") {
    mult();
  } else if (operator == "/") {
    div();
  } else if (operator == "Enter") {
    result();
  }
});

// volver el input a "" una vez se haya presionado el boton de una operacion
input.addEventListener("keyup", (e) => {
  let operator = e.key;
  if (operator == "+") {
    input.value = "";
  } else if (operator == "-") {
    input.value = "";
  } else if (operator == "*") {
    input.value = "";
  } else if (operator == "/") {
    input.value = "";
  }
});

//al crearse los bottones dinamicamente no podemos añadirles directamente a cada uno un on click
//asi que hacemos una delegacion de eventoss desde el elemento padre buttons

const target = document.querySelector(".buttons");
const targets = document.querySelector(".buttonsOperators");

target.addEventListener('click', (e) => {
  let number = e.target.innerText;
  let className = e.target.className
  if (className == 'numberPad') {
    printNumbInput(number)
  }
});

targets.addEventListener('click', (e) => {
  let operator = e.target.innerText
  if (operator == '+') {
    suma()
  } else if (operator == '-') {
    resta()
  } else if (operator == '*'){
    mult()
  } else if (operator == '/') {
    div()
  } else if (operator == 'c') {
    reset()
  }
})