angular.module('signApiDemo', [
  require('signature-api-legacy-for-angular').name
])
.config(function (signatureApiProvider) {
  signatureApiProvider.hosts([
    {name: 'local', 'address': 'http://localhost'}
  ]);
})
.controller('launcher', function (signatureApi){
  signatureApi.on('data', console.log);
  signatureApi.poll();
});