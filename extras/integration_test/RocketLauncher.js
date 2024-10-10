'use strict';

class RocketLauncher {
  constructor(rockets = []) {
    this.rockets = rockets;
  }

  launchAllRockets() {
    this.rockets.forEach((r) => {
      // eslint-disable-next-line no-param-reassign
      r.engineStatus = 'active';
    });
  }

  launchRocketByQueue() {
    const r = this.rockets.shift();
    r.engineStatus = 'active';
  }
}

module.exports = RocketLauncher;
