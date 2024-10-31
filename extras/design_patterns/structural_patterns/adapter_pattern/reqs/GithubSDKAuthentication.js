'use strict';

class GithubSDKAuthentication {
  setToken(token) {
    this.token = token;
  }

  setMode(mode) {
    this.mode = mode;
  }

  signIn() {
    if (!this.token || !this.mode) {
      throw new Error('Need to define token & mode');
    }

    return 'authenticated!';
  }
}

module.exports = GithubSDKAuthentication;
