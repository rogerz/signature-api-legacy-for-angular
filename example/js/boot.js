var angular = require('angular');

angular.module('signApiDemo', [
  require('signature-api-legacy-for-angular').name
]).config(function (signatureApiProvider) {
  signatureApiProvider.hosts({
    'test1': 'localhost',
    'test2': 'localhost'
  });
});