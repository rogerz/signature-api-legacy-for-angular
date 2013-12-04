var angular = require('angular');

angular.module('signApiDemo', [
  require('signature-api-legacy-for-angular').name
]).config(function (signatureApiProvider) {
  signatureApiProvider.hosts({
    'local': 'http://localhost',
    'test1': 'http://test1',
    'test2': 'http://test2'
  });
}).controller('launcher', function (signatureApi){
  signatureApi.on('data', console.log);
  signatureApi.poll();
});