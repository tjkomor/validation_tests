"use strict";

class Car {
  constructor(){
    this._gasInTank = 0
  }
  fillGasTank(gallons) {
    if (gallons < 0) throw new Error('gallons must be positive');
    this._gasInTank += gallons;
  }
  get gasInTank() {
    return this._gasInTank;
  }
  set gasInTank(gallons) {
    this._gasInTank = gallons;
  }
}

module.exports = Car;
