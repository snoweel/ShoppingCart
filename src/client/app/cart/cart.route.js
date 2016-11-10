(function() {
  'use strict';

  angular
    .module('app.cart')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'cart',
        config: {
          url: '/cart',
          templateUrl: 'app/cart/cart.html',
          controller: 'CartController',
          controllerAs: 'vm',
          title: 'ShoppingBag',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> ShoppingBag'
          }
        }
      }
    ];
  }
})();
