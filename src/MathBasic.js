'use strict';

const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('Add function only take 2 arguments');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Add function only take number paramters');
    }

    return a + b;
  },
  substract: () => {

  },
  multiply: () => {

  },
  divide: () => {

  }
};

module.exports = MathBasic;
