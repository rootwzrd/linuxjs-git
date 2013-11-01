module.exports = function gitCommit (message) {
  var linuxjs = require('linuxjs'),
    self = this,
    args = ['-m', message];

  if ( typeof options !== 'object' ) {
    options = {};
  }

  if ( ! options.cwd ) {
    options.cwd = this.cwd;
  }

  linuxjs.spawn('git', ['commit'].concat(args), { cwd: options.cwd })
    .on('error', function (error) {
      self.emit('error', error);
    })
    .on('done', function () {
      self.emit('done');
    });
};