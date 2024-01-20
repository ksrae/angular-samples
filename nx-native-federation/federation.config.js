const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  // name?: string;
  // exposes?: Record<string, string>;
  // shared?: Record<string, SharedConfig>;
  // sharedMappings?: Array<string>;
  // skip?: SkipList;
  name: 'native-federation-remote-dynamic',

  exposes: {

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],


});
