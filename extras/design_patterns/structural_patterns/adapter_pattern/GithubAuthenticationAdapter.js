// A Pattern to link 2 incompatible component to be able to work together

'use strict';

const GithubSDKAuthentication = require('./reqs/GithubSDKAuthentication');
const GoogleSDKAuthentication = require('./reqs/GoogleSDKAuthentication');

class GithubAuthenticationAdapter {
  constructor(githubSDKAuthentication, token, mode) {
    this.githubSDKAuthentication = githubSDKAuthentication;
    this.token = token;
    this.mode = mode;
  }

  authenticate() {
    this.githubSDKAuthentication.setToken(this.token);
    this.githubSDKAuthentication.setMode(this.mode);

    return this.githubSDKAuthentication.signIn();
  }
}

const authenticateApp = (authenticator) => {
  // eslint-disable-next-line no-console
  console.log(authenticator.authenticate());
};

const googleSDKAuthentication = new GoogleSDKAuthentication();
const githubSDKAuthentication = new GithubSDKAuthentication();
const githubAuthenticationAdapter = new GithubAuthenticationAdapter(
  githubSDKAuthentication,
  'abcd-efgh',
  'read'
);

authenticateApp(googleSDKAuthentication);

authenticateApp(githubAuthenticationAdapter);
