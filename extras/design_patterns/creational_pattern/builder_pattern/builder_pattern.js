'use strict';

const Handphone = require('./reqs/Handphone');

class HandphoneBuilder {
  constructor(processor, ram) {
    this.processor = processor;
    this.ram = ram;

    this.speaker = 'Dolby Atmos';
    this.screen = 'IPS';
  }

  setSpeaker(speaker) {
    this.speaker = speaker;
    return this;
  }

  setScreen(screen) {
    this.screen = screen;
    return this;
  }

  build() {
    return new Handphone(this.processor, this.ram, this.speaker, this.screen);
  }
}

const myPhone = new HandphoneBuilder('Octa-core', '8GB')
  .setScreen('Amoled')
  .build();

myPhone.flexing();
