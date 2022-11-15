//#region Sources

const numberPad = [
    {
        valor: 1,
        class: "numberPad"
    },
    {
        valor: 2,
        class: 'numberPad'
    },
    {
        valor: 3,
        class: 'numberPad'
    },
    {
        valor: 4,
        class: 'numberPad'
    },
    {
        valor: 5,
        class: 'numberPad'
    },
    {
        valor: 6,
        class: 'numberPad'
    },
    {
        valor: 7,
        class: 'numberPad'
    },
    {
        valor: 8,
        class: 'numberPad'
    },
    {
        valor: 9,
        class: 'numberPad'
    },
    {
        valor: 0,
        class: 'numberPad'
    },
    {
        valor: ".",
        class: 'numberPad'
    },
    {
        valor: "=",
        class: 'numberPad'
    }
]

const operatorPad = [
    {
        operation: "suma",
        operationFunction: suma,
        operator: "+",
        class: "numberPad"
    },
    {
        operation: "resta",
        operationFunction: resta,
        operator: '-',
        class: "numberPad"
    },
    {
        operation: "mult",
        operationFunction: mult,
        operator: '*',
        class: "numberPad"
    },
    {
        operation: "div",
        operationFunction: div,
        operator: '/',
        class: "numberPad"
    },
    {
        operation: "reset",
        operator: 'c',
        class: "numberPad"
    },
]

//#endregion

//#region construccion de elementos visuales
const buttons = numberPad.map(function (numberPad) {
    return `
    <button 
        ${!isNaN(numberPad.valor) ? `onclick = printNumbInput(${numberPad.valor})` : `onclick = printNumbInput("${(numberPad.valor)}")`}
        id = "${numberPad.valor}" 
        class = '${numberPad.class}'>

    ${numberPad.valor}

    </button>`
})

const operatorButtons = operatorPad.map(function (operatorPad) {
    return `<button onclick = "${operatorPad.operation}()" class='${operatorPad.class}'>${operatorPad.operator}</button>`
})

function printNumbInput(number) {
    if (number != "=") {
        let dato = document.getElementById("input")
        dato.value += number
    } else if (number == '=') {
        result()
    }
}

//#endregion

//#region operaciones

let accumulator = 0;
let currentOperator = "";

const input = document.getElementById('input')

function suma() {
    let resultado = parseFloat(input.value)
    currentOperator = "+"
    if (resultado != "") {
        return (
            accumulator += resultado,
            input.value = ""
        );
    }
}

function resta() {
    let resultado = parseFloat(input.value)
    if (resultado != 0) {
        if (accumulator == 0) {
            if (currentOperator == "") {
                return (
                    accumulator += resultado,
                    currentOperator = "-",
                    input.value = ""
                );
            } else if (currentOperator == "-") {
                return (
                    accumulator -= resultado,
                    input.value = ""
                );
            }
        } else if (accumulator != 0) {
            return (
                accumulator -= resultado,
                input.value = ""
            );
        }
    } else if (resultado == 0) {
        if (accumulator == 0) {
            return (
                currentOperator = "-",
                input.value = ""
            );
        }
    }
}

function mult() {
    let resultado = parseInt(input.value)
    if (resultado != 0) {
        if (accumulator == 0) {
            if (currentOperator == "") {
                return (
                    accumulator += resultado,
                    currentOperator = "*",
                    input.value = ""
                );
            }
        } else if (accumulator != 0) {
            return (
                accumulator *= resultado,
                input.value = ""
            );
        }
    } else if (resultado == 0) {
        if (accumulator == 0) {
            if (currentOperator == "") {
                return (
                    accumulator += resultado,
                    currentOperator = "*",
                    input.value = ""
                );
            }
        } else if (accumulator != 0) {
            return (
                accumulator *= resultado,
                currentOperator = "*",
                input.value = ""
            );
        }
    }
}


function div() {
    let resultado = parseInt(input.value)
    currentOperator = "/"
    if (resultado != "" && accumulator == 0) {
        return (
            accumulator += resultado,
            input.value = ""
        );
    } else if (resultado != "" && accumulator != 0) {
        return (
            accumulator /= resultado,
            input.value = ""
        );
    }
}

function reset() {
    input.value = ""
    accumulator = 0
    currentOperator = ""
}


function result() {
    if (input.value != "") {
        if (currentOperator != "") {
            operatorPad
                .find((operatorPad) => operatorPad.operator === currentOperator)
                .operationFunction()
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

//#endregion

document.getElementById('buttons').innerHTML = (buttons.join(''))
document.getElementById('operators').innerHTML = (operatorButtons.join(''))