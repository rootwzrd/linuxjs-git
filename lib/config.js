module.exports = function gitConfig (config, options) {
  var linuxjs = require('linuxjs'),
    self = this,
    args = [];

  if ( typeof config !== 'object' ) {
    return self.emit('error', new Error('Nothing to configure'));
  }

  for ( var key in config ) {
    args.push(key, config[key]);
  }

  if ( typeof options !== 'object' ) {
    options = {};
  }

  if ( ! options.cwd ) {
    options.cwd = this.cwd;
  }

  linuxjs.spawn('git', ['config'].concat(args), { cwd: options.cwd })
    .on('error', function (error) {
      self.emit('error', error);
    })
    .on('done', function () {
      self.emit('done');
    });
};