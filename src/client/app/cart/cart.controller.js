(function() {
  'use strict';

  angular
    .module('app.cart')
    .controller('CartController', CartController);

  CartController.$inject = ['logger','cartService','$timeout','$q'];
  /* @ngInject */
  function CartController(logger,cartService,$timeout,$q) {
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
      fetchShoppingCart().then(renderShoppingCart);
    }//activate

    function editElement(item,list){
        console.log('inside editElement Fn');
      }//editElement

    function removeElement(item,list){
        console.log('inside removeElement Fn');
        var updatedList= _.without(list,item);
        cartService.storeCartToLocalDb(vm.user,updatedList).then(function(response){
            renderShoppingCart(updatedList);
        })

    }//

    function moveToWishlist(item){
        console.log('inside moveToWishlist Fn');
    }//

    function fetchShoppingCart(){
      var deferred = $q.defer();
      cartService.getCurrentShoppingCart(vm.user).then(function(response){
          console.log(angular.toJson(response));
          deferred.resolve(response);
          // renderShoppingCart(response)
      });

      return deferred.promise;
    }//fetchShoppingCart

    function deleteItemFromCart(){
      var deferred = $q.defer();
      return deferred.promise;
    }//deleteItemFromCart

    function renderShoppingCart(response){
      $timeout(function(){
          vm.cartItemsDisplay =response;
      })

    }//renderShoppingCart
  }//CartController
})();
