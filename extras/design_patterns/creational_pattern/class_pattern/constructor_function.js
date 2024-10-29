'use strict';

const crv = {
  manufacture: 'honda',
  model: 'crv',
  year: 2020,
  color: 'red',
  engineStatus: 'inactive',
  startEngine() {
    this.engineStatus = 'active';

    // eslint-disable-next-line no-console
    console.log(`The ${this.color} ${this.model} is ${this.engineStatus}. Vroom!`);
  }
};

crv.startEngine();
