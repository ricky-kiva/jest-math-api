'use strict';

class Handphone {
  constructor(processor, ram, speaker, screen) {
    this.processor = processor;
    this.ram = ram;
    this.speaker = speaker;
    this.screen = screen;
  }

  flexing() {
    // eslint-disable-next-line no-console
    console.log(
      `My phone has ${this.ram} of RAM and equipped with ${this.processor}. `
      + `The screen is a wide ${this.screen} and it has ${this.speaker} sound system!`
    );
  }
}

module.exports = Handphone;
