/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

'use strict';

const DataStore = require('../method_pattern');

class MySQLDataStore extends DataStore {
  connect() {
    console.log('Connecting MySQL..');
  }

  query(q) {
    console.log(`MySQL executing query: ${q}`);
  }

  disconnect() {
    console.log('MySQL is disconnected');
  }
}

const mySQLDataStore = new MySQLDataStore();

mySQLDataStore.process('SELECT * FROM users');
