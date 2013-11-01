module.exports = function gitPush (remote, branch, options) {
  var linuxjs = require('linuxjs'),
    self = this;

  if ( typeof options !== 'object' ) {
    options = {};
  }

  if ( ! options.cwd ) {
    options.cwd = this.cwd;
  }

  linuxjs.spawn('git', ['push', remote, branch], { cwd: options.cwd })
    .on('error', function (error) {
      self.emit('error', error);
    })
    .on('done', function () {
      self.emit('done');
    });
};