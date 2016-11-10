/* jshint -W117, -W030 */
describe('cart routes', function() {
  describe('state', function() {
    var view = 'app/cart/cart.html';

    beforeEach(function() {
      module('app.cart', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state cart to url /cart ', function() {
      expect($state.href('cart', {})).to.equal('/cart');
    });

    it('should map /cart route to cart View template', function() {
      expect($state.get('cart').templateUrl).to.equal(view);
    });

    it('of cart should work with $state.go', function() {
      $state.go('cart');
      $rootScope.$apply();
      expect($state.is('cart'));
    });
  });
});
