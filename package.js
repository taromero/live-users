Package.describe({
  name: 'canotto90:live-users',
  version: '0.0.2',
  summary: 'Show a live snapshot of all users with an active session',
  git: 'https://github.com/taromero/live-users',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2')
  api.use('templating@1.1.0')
  api.addFiles('camera_methods.js', 'server')
  api.addFiles('publications.js', 'server')
  api.addFiles('lib/camera.js', 'client')
  api.addFiles('templates/live_users.html', 'client')
  api.addFiles('templates/live_users.js', 'client')
  api.addFiles('templates/snapshot_recorder.html', 'client')
  api.addFiles('templates/snapshot_recorder.js', 'client')
  api.export('Camera', 'client')
});

