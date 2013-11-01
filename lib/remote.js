module.exports = function gitRemote (action, options) {
  var linuxjs = require('linuxjs'),
    self = this,
    args = ['remote', action];

  if ( typeof options !== 'object' ) {
    options = {};
  }

  if ( ! options.cwd ) {
    options.cwd = this.cwd;
  }

  switch ( action ) {
    case 'add':
      if ( typeof options.name === 'string' ) {
        args.push(options.name);
      }
      if ( typeof options.url === 'string' ) {
        args.push(options.url);
      }
      break;
  }

  linuxjs.spawn('git', args, { cwd: options.cwd })
    .on('error', function (error) {
      self.emit('error', error);
    })
    .on('message', function (message) {
      console.log(message);
    })
    .on('done', function () {
      self.emit('done');
    });
};