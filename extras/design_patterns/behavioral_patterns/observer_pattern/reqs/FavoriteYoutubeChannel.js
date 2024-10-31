'use strict';

class FavoriteYouTubeChannel {
  constructor(subscription) {
    this.subscription = subscription;
  }

  uploadNewVideo(title) {
    this.subscription.notify(`New video: ${title}`);
  }
}

module.exports = FavoriteYouTubeChannel;
