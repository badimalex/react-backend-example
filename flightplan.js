/* eslint-disable */

var plan = require('flightplan');

var tmpDir = 'blog-platform-' + new Date().getTime();
var user = 'deploy';

plan.target('production', {
  host: '159.203.142.189',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.exec('nvm use default');
  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  remote.log('Build');
  remote.exec('npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Reload application');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Cleanup old releases');
  var fetchReleases = remote.exec('ls -r ~', { silent: true });
  if (fetchReleases.code === 0) {
    var releases = fetchReleases.stdout.trim().split('\n').slice(5);
    var tmpIndex = releases.indexOf('tmp');
    var currentIndex = releases.indexOf('current');
    if (tmpIndex > -1) releases.splice(tmpIndex, 1);
    if (currentIndex > -1) releases.splice(currentIndex, 1);
    if (releases.length) {
      remote.with('cd ~', () => remote.exec('rm -rf '+releases.join(' ')));
    }
  }
});
