'use strict';

const Engine = require('../reqs/Engine');

class Car {
  constructor() {
    // instantiating here makes the class tightly coupled
    this.engine = new Engine();
  }

  start() {
    this.engine.activate();

    // eslint-disable-next-line no-console
    console.log(`Car engine ${this.engine.status}!`);
  }
}

const car = new Car();

car.start();
