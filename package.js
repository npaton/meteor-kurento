Package.describe({
  name: 'npaton:kurento',
  version: '0.2.1',
  summary: 'Kurento Media Server node.js library',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('meteor');

  api.addFiles('kurento-server.js', 'server');
  api.export(['getKurentoClient', 'kurento'], 'server');
});

Npm.depends({
	"kurento-client": "6.2.0"
});
