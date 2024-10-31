// Simplifies complex systems by creating easy-to-use functions that hide underlying complexity

'use strict';

const Accountant = require('./reqs/Accountant');
const Kitchen = require('./reqs/Kitchen');
const Chef = require('./reqs/Chef');

class FoodOrder {
  // eslint-disable-next-line consistent-return
  static async order(menu) {
    try {
      const accountant = new Accountant();
      const kitchen = new Kitchen();
      const chef = new Chef();

      const bill = await accountant.recordOrder(menu);

      await kitchen.verifyAvailabilityIngredients(menu);

      const orderedFood = await chef.cook(menu);

      return { orderedFood, bill };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Order failed due to ${error}`);
    }
  }
}

module.exports = FoodOrder;
