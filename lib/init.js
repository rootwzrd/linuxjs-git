module.exports = function gitInit (options) {
  var linuxjs = require('linuxjs'),
    self = this;

  if ( typeof options !== 'object' ) {
    options = {};
  }

  if ( ! options.cwd ) {
    options.cwd = this.cwd;
  }

  linuxjs.spawn('git', ['init'], { cwd: options.cwd })
    .on('error', function (error) {
      self.emit('error', error);
    })
    .on('done', function () {
      self.emit('done');
    });
};