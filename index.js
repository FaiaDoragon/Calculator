

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
    return(
    `
    <button 
        ${!isNaN(numberPad.valor) ? `onclick = printNumbInput(${numberPad.valor})` : `onclick = printNumbInput("${(numberPad.valor)}")`}
        id = "${numberPad.valor}" 
        class = '${numberPad.class}'>

    ${numberPad.valor}

    </button>`)
})

const operatorButtons = operatorPad.map(function (operatorPad) {
    return `<button  onclick = "${operatorPad.operation}()" onkeydown = "'${operatorPad.operator}', ${operatorPad.operation}()" class='${operatorPad.class}'>${operatorPad.operator}</button>`
})



function printNumbInput(number)  {
    if (number != "=") {
        let dato = document.getElementById("input")
        dato.value += number
    } else if (number == '=') {
        result()
    }
}



//#endregion

//#region tabla y classes

let tableData = []

class Table {

    constructor(currentOperator, amount, description, action) {
        this._currentOperator = currentOperator;
        this._amount = amount;
        this._description = description;
        this._action = action;
    }
}


//document.getElementById("tabla").innerHTML = (tabla.join(''))

//#endregion

//#region operaciones

let accumulator = 0;
let currentOperator = "";
const input = document.getElementById('input');




input.addEventListener('keydown', e => {
    //console.log(e.key)
    let operator = e.key

    if (operator == "+") {
        suma()
    } else if (operator == "-") {
        resta()
    } else if (operator == "*") {
        mult()
    } else if (operator == "/") {
        div()
    } else if (operator == "Enter") {
        result()
    }
})

input.addEventListener('keyup', e => {
    let operator = e.key
    if (operator == "+") {
        input.value = ""
    } else if (operator == "-") {
        input.value = ""
    } else if (operator == "*") {
        input.value = ""
    } else if (operator == "/") {
        input.value = ""
    }
})

function suma() {
    let resultado = parseFloat(input.value);
    //let aggElement = tableData.push(new Table(currentOperator, resultado,`<input />`, `<button>delete</button>`));
//     const tablaElements = tableData.map(function (tableData) {
//         return `
//     <tr>
//         <td>${tableData._currentOperator}</td>
//         <td>${tableData._amount}</td>
//         <td>${tableData._description}</td>
//         <td>${tableData._action}</td>
//     </tr>
//     `
// })

    if (resultado != 0) {
        return (
            currentOperator = "+",
            accumulator += resultado,
            tableData.push(new Table(currentOperator, resultado,`<input />`, `<button>delete</button>`)),
            console.log(tableData),
            tablaElements = tableData.map(function (tableData) {
                return `
            <tr>
                <td>${tableData._currentOperator}</td>
                <td>${tableData._amount}</td>
                <td>${tableData._description}</td>
                <td>${tableData._action}</td>
            </tr>
            `
        }),
            document.getElementById("tabla").innerHTML = (tablaElements.join('')),
            input.value = ""
        );
    } else if (resultado == 0) {
        return (
            currentOperator = "+",
            accumulator += resultado,
            tableData.push(new Table(currentOperator, resultado,`<input />`, `<button>delete</button>`)),
            console.log(tableData),
            tablaElements = tableData.map(function (tableData) {
                return `
            <tr>
                <td>${tableData._currentOperator}</td>
                <td>${tableData._amount}</td>
                <td>${tableData._description}</td>
                <td>${tableData._action}</td>
            </tr>
            `
        }),
            document.getElementById("tabla").innerHTML = (tablaElements.join('')),
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
                    printInfoTable(),
                    currentOperator = "-",
                    input.value = ""
                );
            } else if (currentOperator == "-") {
                return (
                    accumulator -= resultado,
                    printInfoTable(),
                    input.value = ""
                );
            }
        } else if (accumulator != 0) {
            return (
                accumulator -= resultado,
                printInfoTable(),
                input.value = ""
            );
        }
    } else if (resultado == 0) {
        if (accumulator == 0) {
            return (
                currentOperator = "-",
                printInfoTable(),
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
    if (resultado != 0) {
        if (accumulator == 0) {
            if (currentOperator == "") {
                return (
                    accumulator += resultado,
                    currentOperator = "/",
                    input.value = ""
                );
            }
        } else if (accumulator != 0) {
            return (
                accumulator /= resultado,
                input.value = ""
            );
        }
    } else if (resultado == 0) {
        if (accumulator == 0) {
            if (currentOperator == "") {
                return (
                    accumulator += resultado,
                    currentOperator = "/",
                    input.value = ""
                );
            }
        } else if (accumulator != 0) {
            return (
                accumulator /= resultado,
                currentOperator = "/",
                input.value = ""
            );
        }
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

//#region Clases

// class Tabla {
//     constructor(simbol, amount, concept, action) {
//         this._simbol = simbol;
//         this._amount = amount;
//         this._concept = concept;
//         this._action = action;
//     }
//     suma(){}
//     resta(){}
//     mult(){}
//     div(){}

//     get simbol(){
//         return this._simbol;
//     }
//     set simbol(nuevoSimbol){
//         return this._simbol = nuevoSimbol;
//     }
// }

// let table = new Tabla(currentOperator, '452', 'input', 'delete');

// console.log(table.suma());
//#endregion

//#region tabla

const taable = `

<tr>
    <td>Simbol</td>
    <td>Amount</td>
    <td>Concept</td>
    <td>Action</td>
</tr>
`

function printInfoTable() {
    document.getElementById("table").innerHTML = `
    <tr>
        <td>Simbol</td>
        <td>Amount</td>
        <td>Concept</td>
        <td>Action</td>
    </tr>
    <tr>
        <td>${currentOperator}</td>
        <td>${input.value}$</td>
        <td><input /></td>
        <td><button>Delete</button></td>
    </tr>
    `

    
}

//#endregion

document.getElementById('buttons').innerHTML = (buttons.join(''))
document.getElementById('operators').innerHTML = (operatorButtons.join(''))