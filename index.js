

const numberPad = [
    { valor: 1, class: "numberPad" },
    { valor: 2, class: 'numberPad' },
    { valor: 3, class: 'numberPad' },
    { valor: 4, class: 'numberPad' },
    { valor: 5, class: 'numberPad' },
    { valor: 6, class: 'numberPad' },
    { valor: 7, class: 'numberPad' },
    { valor: 8, class: 'numberPad' },
    { valor: 9, class: 'numberPad' },
    { valor: 0, class: 'numberPad' },
    { valor: ".", class: 'numberPad' },
    { valor: "=", class: 'numberPad' }
]

const operatorPad = [
    { operation: "suma", operator: "+", class: "numberPad" },
    { operation: "resta", operator: '-', class: "numberPad" },
    { operation: "mult", operator: '*', class: "numberPad" },
    { operation: "div", operator: '/', class: "numberPad" },
]

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
    return `<button onclick = ${operatorPad.operation}("${operatorPad.operator}") class='${operatorPad.class}'>${operatorPad.operator}</button>`
})

function printNumbInput(number) {
    if (number != "=") {
        let dato = document.getElementById("input")
        dato.value += number
    } else if (number == '=') {
        result()
    }
}

let accumulator = 0;
let currentOperator = "";

const input = document.getElementById('input')

function suma() {
    let resultado = parseInt(input.value)
    currentOperator = "+"
    if (resultado != "") {
        return (
            accumulator += resultado,
            input.value = ""
        );
    }
}

function resta() {
    let resultado = parseInt(input.value)
    currentOperator = "-"
    if (resultado != "") {
        return (
            accumulator -= resultado,
            input.value = ""
        );
    }
}

function mult() {
    let resultado = parseInt(input.value)
    currentOperator = "*"
    if (resultado != "") {
        return (
            accumulator *= resultado,
            input.value = ""
        );
    }
}

function div() {
    let resultado = parseInt(input.value)
    currentOperator = "/"
    if (resultado != "") {
        return (
            accumulator /= resultado,
            input.value = ""
        );
    }
}


function result() {
    if (currentOperator != "") {
        operatorPad
            .find((operatorPad) => operatorPad.operator === currentOperator)
            //.operation()
        input.value = accumulator;
        currentOperator = "";
    }
}

document.getElementById('buttons').innerHTML = (buttons.join(''))
document.getElementById('operators').innerHTML = (operatorButtons.join(''))



