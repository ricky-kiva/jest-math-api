'use strict';

const Logging = {
  logs: [],
  addLog(log) { this.logs.push(log); },
  viewLogs() {
    this.logs.forEach((log) => {
      // eslint-disable-next-line no-console
      console.log(log);
    });
  }
};

const loggingA = Logging;
const loggingB = Logging;

loggingA.addLog('log 1');
loggingB.addLog('log 2');
loggingB.addLog('log 3');

loggingA.viewLogs();
