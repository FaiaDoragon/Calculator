export const Table = class Table {
  constructor(currentOperator, amount, description, action) {
    this._currentOperator = currentOperator;
    this._amount = amount;
    this._description = description;
    this._action = action;
  }
}
