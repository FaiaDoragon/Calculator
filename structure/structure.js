import { numberPad, operatorPad } from "../sources/sources.js";

export const buttons = numberPad.map(function (numberPad) {
  return `
    <button 
        ${
          !isNaN(numberPad.valor)
            ? `onclick = printNumbInput(${numberPad.valor})`
            : `onclick = printNumbInput("${numberPad.valor}")`
        }
        id = "${numberPad.valor}" 
        class = '${numberPad.class}'>

    ${numberPad.valor}

    </button>`;
});

export const operatorButtons = operatorPad.map(function (operatorPad) {
  return `<button  onclick = "${operatorPad.operation}()" onkeydown = "'${operatorPad.operator}', ${operatorPad.operation}()" class='${operatorPad.class}'>${operatorPad.operator}</button>`;
});

export function printNumbInput(number) {
  if (number != "=") {
    let dato = document.getElementById("input");
    dato.value += number;
  } else if (number == "=") {
    result();
  }
}
