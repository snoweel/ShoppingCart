(function() {
  'use strict';

  angular
    .module('sp-shoppingcart')
    .directive('spShoppingcartButton', spShoppingcartButton);

  /* @ngInject */
  function spShoppingcartButton() {

    var directive = {
      scope: {
      },
      templateUrl: 'app/widgets/shoppingCart/shopping-cart-btn.template.html',
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attr) {

    }
  }
})();
