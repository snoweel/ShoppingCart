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
    // vm.editElement=editElement;
    vm.removeElement=removeElement;
    vm.moveToWishlist=moveToWishlist;
    vm.editItemInModal=editItemInModal;
    vm.applyDiscount = applyDiscount;
    vm.user={
      id:'1',
      name:'snoweel'
    }

    activate();

    function activate() {
      logger.info('Activated Shopping  Bag View');
      fetchShoppingCart().then(renderShoppingCart);
    }//activate

    // /**
    //  * [editElement description]
    //  * @param  {[type]} item [item being modified sent from Ui]
    //  * @param  {[type]} list [Whole Shopping Cart ]
    //  * @return {[type]}      [Updated Shopping Cart]
    //  */
    // function editElement(item,list){
    //     console.log('inside editElement Fn');
    //     productsService.getProductById(item).then(function(response){
    //         console.log(angular.toJson(response));
    //     });
    //   }//editElement

    /**
     * [removeElement removes the selected item from Shopping Cart and renders UI Again]
     * @param  {[type]} item [item being modified sent from Ui]
     * @param  {[type]} list [Whole Shopping Cart ]

     */
    function removeElement(item,list){
        console.log('inside removeElement Fn');
        var updatedList= _.without(list,item);
        cartService.storeCartToLocalDb(vm.user,updatedList).then(function(response){
            renderShoppingCart(updatedList);
        });

    }//removeElement

    /**
     * [moveToWishlist moves a item from Shopping Cart to Wishlist]
     * @param  {[type]} item [item being moved]
     * @param  {[type]} list [Whole Shopping Cart]
     */
    function moveToWishlist(item,list){
        console.log('inside moveToWishlist Fn');
        var updatedList= _.without(list,item);
        cartService.storeCartToLocalDb(vm.user,updatedList).then(function(response){
            renderShoppingCart(updatedList);
        });
        wishlistService.additemToWishList(vm.user,item);
    }//moveToWishlist

    /**
     * [fetchShoppingCart gets Shopping Cart ]
     * @return {[type]} [Whole Shopping Cart]
     */
    function fetchShoppingCart(){
      var deferred = $q.defer();
      cartService.getCurrentShoppingCart(vm.user).then(function(response){
          console.log(angular.toJson(response));
          deferred.resolve(response);
          // renderShoppingCart(response)
      });

      return deferred.promise;
    }//fetchShoppingCart

    // function deleteItemFromCart(){
    //   var deferred = $q.defer();
    //   return deferred.promise;
    // }//deleteItemFromCart

    /**
     * [renderShoppingCart Updates the ShoppingCart display variables]
     * @param  {[type]} response [Whole ShoppingCart]
     */
    function renderShoppingCart(response){
      RenderBill(response);
      $timeout(function(){
          vm.cartItemsDisplay =response;
      })

    }//renderShoppingCart

    /**
     * [RenderBill Computes and Updates Bill ]
     * @param {[type]} response [Whole ShoppingCart]
     * @param {[type]} flag     [discount to be given boolean flag]
     */
    function RenderBill(response,flag){
        var tempBill =cartService.calulateBill(response,flag);
        $timeout(function(){
            vm.Bill =tempBill;
        })
    }//RenderBill

    /**
     * [editItemInModal OPens a modal Window to edit a item details and sets them in ShoppingCart]
     * @param  {[type]} ev    [event which calls modal window]
     * @param  {[type]} item  [item to be updated]
     * @param  {[type]} list  [Whole ShoppingCart]
     * @param  {[type]} index [index of item in ShoppingCart]
     */
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

    /**
     * [applyDiscount checks if PromoCode is there and applies discount]
     * @param  {[type]} PromoCode [PromoCode or discount copoun]
     * @param  {[type]} list      [Whole ShoppingCart]
     */
    function applyDiscount(PromoCode,list){
      console.log(PromoCode);
      if(PromoCode!==undefined && PromoCode==='JF10'){
          RenderBill(list,true);
      }

    }//computeTotal
  }//CartController
})();
