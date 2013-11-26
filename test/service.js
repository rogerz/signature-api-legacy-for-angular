describe('signature API', function () {
  var signatureApi;
  beforeEach(function () {
    module(require('signature-api-legacy-for-angular').name);
    inject(function (_signatureApi_) {
      signatureApi = _signatureApi_;
    });
  });

  it('should before each', function () {
    expect(true).toBe(true);
  });
/*
  it('should allow initing hosts', function () {
    inject(function (signatureApiProvider) {
      expect(angular.isFunction(signatureApiProvider.hosts)).toBe(true);
    });
  });

  it('should export API', function () {
    expect(angular.isFunction(signatureApi.setup)).toBe(true);
  });
*/
});
