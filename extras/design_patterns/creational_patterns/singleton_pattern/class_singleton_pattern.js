'use strict';

class Logging {
  constructor() {
    if (typeof Logging.INSTANCE === 'object') {
      return Logging.INSTANCE;
    }

    this.logs = [];

    Logging.INSTANCE = this;
  }

  addLog(log) {
    this.logs.push(log);
  }

  viewLogs() {
    this.logs.forEach((log) => {
      // eslint-disable-next-line no-console
      console.log(log);
    });
  }
}

const LoggingA = new Logging();
const LoggingB = new Logging();

LoggingA.addLog('log 1');
LoggingB.addLog('log 2');
LoggingB.addLog('log 3');

LoggingA.viewLogs();
