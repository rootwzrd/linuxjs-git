module.exports = function gitAdd (files) {
  var linuxjs = require('linuxjs'),
    self = this,
    args = [];

  if ( typeof options !== 'object' ) {
    options = {};
  }

  if ( ! options.cwd ) {
    options.cwd = this.cwd;
  }

  if ( ! files ) {
    args.push('-A');
  }

  linuxjs.spawn('git', ['add'].concat(args), { cwd: options.cwd })
    .on('error', function (error) {
      self.emit('error', error);
    })
    .on('done', function () {
      self.emit('done');
    });
};