'use strict';

class Car {
  constructor(manufacturer, model, year, color) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.color = color;
    this.engineStatus = 'inactive';
  }

  startEngine() {
    this.engineStatus = 'active';

    // eslint-disable-next-line no-console
    console.log(`${this.color} ${this.model} is ${this.engineStatus}. Vroom!`);
  }
}

const crv = new Car('honda', 'crv', 2020, 'gray');

crv.startEngine();
