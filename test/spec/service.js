describe('signature API', function () {
  var signatureApi;
  var hosts = {
    'test': 'http://10.0.0.1',
    'dev': 'http://10.0.0.2',
    'prod': 'http://10.0.0.3'
  };
  var response = {
    list: [{
      "id":"1241",
      "orig_filename":"signatures/1/1.png",
      "trans_filename":"signatures/1/1.png",
      "signature":"2013-11-09 07:23:56",
      "directory":"1"
    },{
      "id":"1242",
      "orig_filename":"signatures/1/2.png",
      "trans_filename":"signatures/1/2.png",
      "signature":"2013-11-09 07:25:28",
      "directory":"1"
    }],
    update: []
  };

  var $httpBackend;

  beforeEach(function () {
    module(require('signature-api-legacy-for-angular').name);
    module(function(signatureApiProvider) {
      expect(angular.isFunction(signatureApiProvider.hosts)).toBe(true);
      signatureApiProvider.hosts(hosts);
    });
    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      signatureApi = $injector.get('signatureApi');
    });
    signatureApi.setup('test', {eventId: 118});
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should export API', function () {
    ['setup', 'list', 'update', 'add'].forEach(function (api) {
      expect(angular.isFunction(signatureApi[api])).toBe(true);
    });
  });

  it('should send request', function () {
    $httpBackend.expectGET('http://10.0.0.1/?m=api&a=do_e_signature_list&c_event_id=118&directory=1')
    .respond(200, response.list);
    $httpBackend.expectGET('http://10.0.0.1/?last_id=1242&m=api&a=do_e_signature_list&c_event_id=118&directory=1')
    .respond(200, response.update);

    signatureApi.list(function () {
      signatureApi.update();
    });

    $httpBackend.flush();
  });
});
