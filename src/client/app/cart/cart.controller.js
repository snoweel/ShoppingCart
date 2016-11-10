(function() {
  'use strict';

  angular
    .module('app.cart')
    .controller('CartController', CartController);

  CartController.$inject = ['logger','cartService'];
  /* @ngInject */
  function CartController(logger,cartService) {
    var vm = this;
    vm.title = 'Cart Details';
    vm.user={
      id:'1',
      name:'snoweel'
    }

    activate();

    function activate() {
      logger.info('Activated Shopping  Bag View');
      cartService.getCurrentShoppingCart(vm.user).then(function(response){
          console.log(angular.toJson(response));
      });
    }

    function renderShoppingCart(response){


    }
  }
})();
