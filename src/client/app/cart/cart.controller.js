(function() {
  'use strict';

  angular
    .module('app.cart')
    .controller('CartController', CartController);

  CartController.$inject = ['logger','cartService','wishlistService','productsService','$timeout','$q','$mdDialog'];
  /* @ngInject */
  function CartController(logger,cartService,wishlistService,productsService,$timeout,$q,$mdDialog) {
    var vm = this;
    vm.title = 'Cart Details';
    vm.editElement=editElement;
    vm.removeElement=removeElement;
    vm.moveToWishlist=moveToWishlist;
    vm.editItemInModal=editItemInModal;
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
        productsService.getProductById(item).then(function(response){
            console.log(angular.toJson(response));
        });
      }//editElement

    function removeElement(item,list){
        console.log('inside removeElement Fn');
        var updatedList= _.without(list,item);
        cartService.storeCartToLocalDb(vm.user,updatedList).then(function(response){
            renderShoppingCart(updatedList);
        });

    }//removeElement

    function moveToWishlist(item,list){
        console.log('inside moveToWishlist Fn');
        var updatedList= _.without(list,item);
        cartService.storeCartToLocalDb(vm.user,updatedList).then(function(response){
            renderShoppingCart(updatedList);
        });
        wishlistService.additemToWishList(vm.user,item);
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

     function editItemInModal(ev,item,list,index) {
      //  var tempEvent =angular.copy(ev);
      console.log('loggin for now');

      productsService.getProductById(item).then(function(productDetail){
          console.log(angular.toJson(productDetail));

          $mdDialog.show({
              controller: 'EditItemInModalController',
              templateUrl: 'app/cart/itemEdit.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true,
              locals: {
               item: item,
               product:productDetail
             }
              // ,   fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(updatedItem) {
              console.log('updatedItem : '+angular.toJson(updatedItem));
               _.assign(list[index],updatedItem);
               cartService.storeCartToLocalDb(vm.user,list).then(function(response){
                  renderShoppingCart(list);
               });

              //needToFIreupdateCOde
            }, function() {
              console.log('Do not update changes .. reverting ......');
            });

      });

    }//editItemInModal


    function computeTotal(response){

    }//computeTotal
  }//CartController
})();
