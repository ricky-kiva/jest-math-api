// A pub/sub-like pattern where observers could subscribe to a subject & react to its changes

'use strict';

const FavoriteYouTubeChannel = require('./reqs/FavoriteYoutubeChannel');

class Subscription {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(message) {
    this.observers.forEach((observer) => observer(message));
  }
}

const subscriber1 = (data) => {
  // eslint-disable-next-line no-console
  console.log(data);
};

const subscriber2 = (data) => {
  // eslint-disable-next-line no-console
  console.log(data);
};

const subscription = new Subscription();
const favoriteYoutubeChannel = new FavoriteYouTubeChannel(subscription);

subscription.subscribe(subscriber1);
subscription.subscribe(subscriber2);

favoriteYoutubeChannel.uploadNewVideo('Historical Pink Floyd Concert');

subscription.unsubscribe(subscriber2);

favoriteYoutubeChannel.uploadNewVideo('3 Hours of Relaxing Saltwater Aquarium');
