'use strict';

class RocketLauncher {
  constructor(repairKit, rockets = []) {
    this.repairKit = repairKit;
    this.rockets = rockets;
  }

  launchAll() {
    this.rockets.forEach((r) => {
      Object.assign(r, {
        engineStatus: 'active'
      });
    });

    this.rockets = [];
  }

  launchByQueue() {
    const r = this.rockets.shift();
    r.engineStatus = 'active';
  }

  async repairAll() {
    let failedRepairCount = 0;

    const repairPromises = this.rockets.map(async (r) => {
      try {
        await this.repairKit.repair(r);
      } catch {
        failedRepairCount += 1;
      }
    });

    await Promise.all(repairPromises);

    if (!failedRepairCount) {
      return 'All rocket repaired!';
    }

    return `there was ${failedRepairCount} of ${this.rockets.length} rocket failed to repair!`;
  }
}

module.exports = RocketLauncher;
