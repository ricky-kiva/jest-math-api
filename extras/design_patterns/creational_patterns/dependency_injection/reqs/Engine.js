'use strict';

class Engine {
  constructor() {
    this.status = 'inactive';
  }

  activate() {
    this.status = 'active';
  }
}

module.exports = Engine;
