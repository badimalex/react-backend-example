var plan = require('flightplan');

var tmpDir = 'blog-platform' + new Date().getTime();
var user = 'deploy';

plan.target('production', {
  host: '104.131.57.164',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Copy files to remote host');
  var filesToCopy = local.exec('git ls-files', { silent: true });
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.log('Move folder to web root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: user});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir
    + ' install ~/' + tmpDir, {user: user});

  remote.sudo('npm --production  --prefix ~/' + tmpDir
    + ' run build', {user: user});

  remote.log('Reload application');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Finish');
});
