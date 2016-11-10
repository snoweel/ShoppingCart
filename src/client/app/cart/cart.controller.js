(function() {
  'use strict';

  angular
    .module('app.cart')
    .controller('CartController', CartController);

  CartController.$inject = ['logger','cartService','$timeout'];
  /* @ngInject */
  function CartController(logger,cartService,$timeout) {
    var vm = this;
    vm.title = 'Cart Details';
    vm.editElement=editElement;
    vm.removeElement=removeElement;
    vm.moveToWishlist=moveToWishlist;
    vm.user={
      id:'1',
      name:'snoweel'
    }

    activate();

    function activate() {
      logger.info('Activated Shopping  Bag View');
      fetchShoppingCart();
    }//activate

    function editElement(item){
        console.log('inside editElement Fn');
    }//

    function removeElement(item){
        console.log('inside removeElement Fn');
    }//

    function moveToWishlist(item){
        console.log('inside moveToWishlist Fn');
    }//

    function fetchShoppingCart(){
      cartService.getCurrentShoppingCart(vm.user).then(function(response){
          console.log(angular.toJson(response));
          renderShoppingCart(response)
      });
    }//fetchShoppingCart

    function renderShoppingCart(response){
      $timeout(function(){
          vm.cartItemsDisplay =response;
      })

    }//renderShoppingCart
  }//CartController
})();
