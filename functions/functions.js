import { operatorPad } from "../sources/sources.js";
import { Table } from "../class/Table.js";

//variables goblales
let tableData = [];
let currentOperator = "";
let accumulator = 0;

// esta es la funcion para sumar los elemenots en el imput
export function suma() {
  // variable que llama el dato del input
  let resultado = parseFloat(input.value);

  // funcion que agrega elementos a table.Data; pasarla al archivo Table.js, importarla y llamarla como argumento.

  let aggElement = tableData.push(
    new Table(
      currentOperator,
      resultado,
      `<input />`,
      `<button>delete</button>`
    )
  );

  //  funcioon que crea la tabla; pasarla al archivo Table.js, importarla y llamarla como argumento
  const tablaElements = tableData.map(function (tableData) {
    return `
    <tr>
        <td>${tableData._currentOperator}</td>
        <td>${tableData._amount}</td>
        <td>${tableData._description}</td>
        <td>${tableData._action}</td>
    </tr>
    `;
  });

  if (resultado != 0) {
    return (
      //establecemos currentOperator como "+" para la variable global
      (currentOperator = "+"),
      //establecemos la suma correspondiente del input = result, con la variable global accumulator
      (accumulator += resultado),
      // pusheamos los datos al array tableData
      aggElement,
      // creamos el segmento de la tabla con los datos correspondientes
      tablaElements,
      (document.getElementById("tabla").innerHTML = tablaElements.join("")),
      //volvemos el input a ""
      (input.value = "")
    );
  } else if (resultado == 0) {
    return (
      (currentOperator = "+"),
      (accumulator += resultado),
      aggElement,
      tablaElements,
      (document.getElementById("tabla").innerHTML = tablaElements.join("")),
      (input.value = "")
    );
  }
}

export function resta() {
  let resultado = parseFloat(input.value);
  if (resultado != 0) {
    if (accumulator == 0) {
      if (currentOperator == "") {
        return (
          (accumulator += resultado),
          printInfoTable(),
          (currentOperator = "-"),
          (input.value = "")
        );
      } else if (currentOperator == "-") {
        return (accumulator -= resultado), printInfoTable(), (input.value = "");
      }
    } else if (accumulator != 0) {
      return (accumulator -= resultado), printInfoTable(), (input.value = "");
    }
  } else if (resultado == 0) {
    if (accumulator == 0) {
      return (currentOperator = "-"), printInfoTable(), (input.value = "");
    }
  }
}

export function mult() {
  let resultado = parseInt(input.value);
  if (resultado != 0) {
    if (accumulator == 0) {
      if (currentOperator == "") {
        return (
          (accumulator += resultado),
          (currentOperator = "*"),
          (input.value = "")
        );
      }
    } else if (accumulator != 0) {
      return (accumulator *= resultado), (input.value = "");
    }
  } else if (resultado == 0) {
    if (accumulator == 0) {
      if (currentOperator == "") {
        return (
          (accumulator += resultado),
          (currentOperator = "*"),
          (input.value = "")
        );
      }
    } else if (accumulator != 0) {
      return (
        (accumulator *= resultado), (currentOperator = "*"), (input.value = "")
      );
    }
  }
}

export function div() {
  let resultado = parseInt(input.value);
  if (resultado != 0) {
    if (accumulator == 0) {
      if (currentOperator == "") {
        return (
          (accumulator += resultado),
          (currentOperator = "/"),
          (input.value = "")
        );
      }
    } else if (accumulator != 0) {
      return (accumulator /= resultado), (input.value = "");
    }
  } else if (resultado == 0) {
    if (accumulator == 0) {
      if (currentOperator == "") {
        return (
          (accumulator += resultado),
          (currentOperator = "/"),
          (input.value = "")
        );
      }
    } else if (accumulator != 0) {
      return (
        (accumulator /= resultado), (currentOperator = "/"), (input.value = "")
      );
    }
  }
}

export function reset() {
  input.value = "";
  accumulator = 0;
  currentOperator = "";
}

export function result() {
  if (input.value != "") {
    if (currentOperator != "") {
      operatorPad
        .find((operatorPad) => operatorPad.operator === currentOperator)
        .operationFunction();
      input.value = accumulator;
      currentOperator = "";
      accumulator = 0;
    }
  } else if (input.value == "") {
    input.value = accumulator;
    accumulator = 0;
    currentOperator = "";
  }
}

export function printNumbInput(number) {
  if (number != "=") {
    let dato = document.getElementById("input");
    dato.value += number;
  } else if (number == "=") {
    result();
  }
}
