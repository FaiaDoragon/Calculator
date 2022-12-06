export function suma() {
  let resultado = parseFloat(input.value);
  let aggElement = tableData.push(
    new Table(
      currentOperator,
      resultado,
      `<input />`,
      `<button>delete</button>`
    )
  );
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
      (currentOperator = "+"),
      (accumulator += resultado),
      tableData.push(
        new Table(
          currentOperator,
          resultado,
          `<input />`,
          `<button>delete</button>`
        )
      ),
      console.log(tableData),
      (tablaElements = tableData.map(function (tableData) {
        return `
            <tr>
                <td>${tableData._currentOperator}</td>
                <td>${tableData._amount}</td>
                <td>${tableData._description}</td>
                <td>${tableData._action}</td>
            </tr>
            `;
      })),
      (document.getElementById("tabla").innerHTML = tablaElements.join("")),
      (input.value = "")
    );
  } else if (resultado == 0) {
    return (
      (currentOperator = "+"),
      (accumulator += resultado),
      tableData.push(
        new Table(
          currentOperator,
          resultado,
          `<input />`,
          `<button>delete</button>`
        )
      ),
      console.log(tableData),
      (tablaElements = tableData.map(function (tableData) {
        return `
            <tr>
                <td>${tableData._currentOperator}</td>
                <td>${tableData._amount}</td>
                <td>${tableData._description}</td>
                <td>${tableData._action}</td>
            </tr>
            `;
      })),
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
