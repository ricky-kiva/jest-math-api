/* eslint-disable no-console */

'use strict';

class Accountant {
  // eslint-disable-next-line class-methods-use-this
  async recordOrder(menu) {
    console.log(`Menu recorded: ${menu}`);
    console.log('Discount applied for Halloween!');

    return 50;
  }
}

module.exports = Accountant;
