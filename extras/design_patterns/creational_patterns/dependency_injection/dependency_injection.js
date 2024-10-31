// A pattern that provides objects to a class, reducing tight coupling and enhancing flexibility

'use strict';

const Engine = require('./reqs/Engine');

class Car {
  constructor(engine) {
    this.engine = engine;
  }

  start() {
    this.engine.activate();

    // eslint-disable-next-line no-console
    console.log(`Engine status is ${this.engine.status}!`);
  }
}

const engine = new Engine();
const car = new Car(engine);

car.start();
