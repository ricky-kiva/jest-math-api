/* eslint-disable no-console */

'use strict';

class Chef {
  // eslint-disable-next-line class-methods-use-this
  async cook(menu) {
    console.log('Food is ready!');
    console.log(`Enjoy Halloween Special within the menu: ${menu}`);

    return 'Halloween Special';
  }
}

module.exports = Chef;
