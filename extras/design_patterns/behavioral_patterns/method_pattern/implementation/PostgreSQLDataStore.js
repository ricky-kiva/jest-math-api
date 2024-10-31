/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

'use strict';

const DataStore = require('../method_pattern');

class PostgreSQLDataStore extends DataStore {
  connect() {
    console.log('Connecting PostgreSQL..');
  }

  query(q) {
    console.log(`PostgreSQL executing query: ${q}`);
  }

  disconnect() {
    console.log('PostgreSQL disconnected');
  }
}

const postgreSQLDataStore = new PostgreSQLDataStore();

postgreSQLDataStore.process('SELECT * FROM users');
