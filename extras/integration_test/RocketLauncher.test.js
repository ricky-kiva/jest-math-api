'use strict';

const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');

describe('A RocketLauncher', () => {
  it('can launch all rockets', () => {
    const nasaRocket = new Rocket('NASA');
    const spaceXRocket = new Rocket('SpaceX');

    // 1. Test Double: Dummy -> passing empty object to the class
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);

    rocketLauncher.launchAll();

    expect(nasaRocket.engineStatus).toEqual('active');
    expect(spaceXRocket.engineStatus).toEqual('active');
    expect(rocketLauncher.rockets.length).toEqual(0);
  });

  it('can launch one rocket by queue', () => {
    const nasaRocket = new Rocket('NASA');
    const spaceXRocket = new Rocket('SpaceX');

    // 1. Test Double: Dummy -> passing empty object to the class
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket]);

    rocketLauncher.launchByQueue();

    expect(nasaRocket.engineStatus).toEqual('active');
    expect(spaceXRocket.engineStatus).toEqual('inactive');
    expect(rocketLauncher.rockets.length).toEqual(1);
  });

  it('should return correct result when repair kit cannot repair the rocket', async () => {
    // 2. Test Double: Stub
    // -> Change object's behavior (fake or real) to have predictable result on testing
    const fakeRocketRepairKit = {
      // eslint-disable-next-line prefer-promise-reject-errors
      repair: () => Promise.reject(('failed to repair the rocket'))
    };

    const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [{}]);

    const result = await rocketLauncher.repairAll();

    expect(result).toEqual('There was 1 of 1 rocket failed to repair!');
  });
});
