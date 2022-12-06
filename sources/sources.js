import { suma, resta, mult, div } from "../functions/functions.js";

export const numberPad = [
  {
    valor: 1,
    class: "numberPad",
  },
  {
    valor: 2,
    class: "numberPad",
  },
  {
    valor: 3,
    class: "numberPad",
  },
  {
    valor: 4,
    class: "numberPad",
  },
  {
    valor: 5,
    class: "numberPad",
  },
  {
    valor: 6,
    class: "numberPad",
  },
  {
    valor: 7,
    class: "numberPad",
  },
  {
    valor: 8,
    class: "numberPad",
  },
  {
    valor: 9,
    class: "numberPad",
  },
  {
    valor: 0,
    class: "numberPad",
  },
  {
    valor: ".",
    class: "numberPad",
  },
  {
    valor: "=",
    class: "numberPad",
  },
];

export const operatorPad = [
  {
    operation: "suma",
    operationFunction: suma,
    operator: "+",
    class: "numberPad",
  },
  {
    operation: "resta",
    operationFunction: resta,
    operator: "-",
    class: "numberPad",
  },
  {
    operation: "mult",
    operationFunction: mult,
    operator: "*",
    class: "numberPad",
  },
  {
    operation: "div",
    operationFunction: div,
    operator: "/",
    class: "numberPad",
  },
  {
    operation: "reset",
    operator: "c",
    class: "numberPad",
  },
];
