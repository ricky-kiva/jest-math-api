'use strict';

const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');
const RocketRepairKit = require('./RocketRepairKit');

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

  it('should repair some repairable rockets when repair kit cannot repair some of the rockets', async () => {
    const repairableRocket = new Rocket('repairableRocket');
    const unrepairableRocket = new Rocket('unrepairableRocket');

    // 3. Test Double: Mock
    // -> Same as Stub, change object's behavior to be predictable,
    // -- but also ensure that the method is being executed
    const fakeRocketRepairKit = {
      repair: jest.fn().mockImplementation((r) => {
        if (r.name === 'repairableRocket') {
          return Promise.resolve();
        }

        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('Failed to repair the rocket');
      })
    };

    const rocketLauncher = new RocketLauncher(
      fakeRocketRepairKit,
      [repairableRocket, unrepairableRocket]
    );

    const result = await rocketLauncher.repairAll();

    expect(result).toEqual('There was 1 of 2 rocket failed to repair!');
    expect(fakeRocketRepairKit.repair).toBeCalled();
    expect(fakeRocketRepairKit.repair).toBeCalledWith(repairableRocket);
  });

  it('should repair all the rockets with repair kit correctly', async () => {
    const nasaRocket = new Rocket('NASA');
    const spaceXRocket = new Rocket('SpaceX');

    const rocketRepairKit = new RocketRepairKit({}, {}, {});

    const spyRepair = jest.spyOn(rocketRepairKit, 'repair');

    const rocketLauncher = new RocketLauncher(
      rocketRepairKit,
      [nasaRocket, spaceXRocket]
    );

    const result = await rocketLauncher.repairAll();

    expect(spyRepair).toBeCalledTimes(2);
    expect(spyRepair).toBeCalledWith(nasaRocket);
    expect(spyRepair).toBeCalledWith(spaceXRocket);
    expect(result).toEqual('All rocket repaired!');
  });
});
