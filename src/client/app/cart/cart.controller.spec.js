/* jshint -W117, -W030 */
describe('CartController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.cart');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('CartController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('cart controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of cart', function() {
        expect(controller.title).to.equal('cart');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
