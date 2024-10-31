// A pattern that creates a template for 2 component with similar implementation

/* eslint-disable class-methods-use-this */

'use strict';

class DataStore {
  constructor() {
    if (this.constructor.name === 'DataStore') {
      throw new Error('DataStore is abstract & need to be implemented');
    }
  }

  connect() {
    throw new Error('method not implemented');
  }

  // eslint-disable-next-line no-unused-vars
  query(q) {
    throw new Error('method not implemented');
  }

  disconnect() {
    throw new Error('method not implemented');
  }

  process(query) {
    this.connect();

    const result = this.query(query);

    this.disconnect();

    return result;
  }
}

module.exports = DataStore;
