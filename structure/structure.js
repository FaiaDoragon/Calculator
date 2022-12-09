import { printNumbInput } from "../functions/functions.js";
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
        onclick = "${operatorPad.operation}()" 
        onkeydown = "'${operatorPad.operator}', ${operatorPad.operation}()" 
        class='${operatorPad.class}'>
        ${operatorPad.operator}
        </button>`;
});

//llamar a las funciones correspondientes al pulsar en el teclado +, -, / o *
input.addEventListener("keydown", (e) => {
  console.log(e.key);
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

