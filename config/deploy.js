/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
    'ssh-index': {
      remoteDir: process.env['ROBODASH_REMOTE_DIR'],
      username: process.env['ROBODASH_SSH_USER'],
      host: process.env['ROBODASH_REMOTE_HOST'],
      port: process.env['ROBODASH_REMOTE_PORT'],
      privateKeyFile: process.env['ROBODASH_SSH_KEY'],
      allowOverwrite: true
    },
    rsync: {
      dest: process.env['ROBODASH_REMOTE_DIR'],
      username: process.env['ROBODASH_SSH_USER'],
      host: process.env['ROBODASH_REMOTE_HOST'],
      port: process.env['ROBODASH_REMOTE_PORT'],
      delete: true
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
