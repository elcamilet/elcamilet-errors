Package.describe({
  name: 'elcamilet:errors',
  summary: 'Patron para mostrar errores de la aplicacion al usuario ',
  version: '1.0.2',
  git: 'https://github.com/elcamilet/elcamilet-errors.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('elcamilet:errors', 'client');

  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('errors_tests.js', 'client');
});
