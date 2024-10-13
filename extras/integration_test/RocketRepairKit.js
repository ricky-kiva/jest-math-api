'use strict';

class RocketRepairKit {
  // making RocketRepairKit instance is difficult, it needs plenty of dependencies
  constructor(objA, objB, objC) {
    this.objA = objA;
    this.objB = objB;
    this.objC = objC;
  }

  // eslint-disable-next-line class-methods-use-this
  repair(rocket) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(`${rocket.name} repaired!`);
      }, 500);
    });
  }
}

module.exports = RocketRepairKit;
