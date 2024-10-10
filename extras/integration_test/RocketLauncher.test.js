'use strict';

const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');

describe('A RocketLauncher', () => {
  it('can launch all rockets', () => {
    const nasaRocket = new Rocket('NASA');
    const spaceXRocket = new Rocket('SpaceX');

    const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

    rocketLauncher.launchAll();

    expect(nasaRocket.engineStatus).toEqual('active');
    expect(spaceXRocket.engineStatus).toEqual('active');
    expect(rocketLauncher.rockets.length).toEqual(0);
  });

  it('can launch one rocket by queue', () => {
    const nasaRocket = new Rocket('NASA');
    const spaceXRocket = new Rocket('SpaceX');

    const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

    rocketLauncher.launchByQueue();

    expect(nasaRocket.engineStatus).toEqual('active');
    expect(spaceXRocket.engineStatus).toEqual('inactive');
    expect(rocketLauncher.rockets.length).toEqual(1);
  });
});
