'use strict';

class RocketLauncher {
  constructor(rockets = []) {
    this.rockets = rockets;
  }

  launchAll() {
    this.rockets.forEach((r) => {
      // eslint-disable-next-line no-param-reassign
      r.engineStatus = 'active';
    });

    this.rockets = [];
  }

  launchByQueue() {
    const r = this.rockets.shift();
    r.engineStatus = 'active';
  }
}

module.exports = RocketLauncher;
