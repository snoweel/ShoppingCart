(function() {
  angular.module('app.core')
    .factory('cartService', cartService);


  cartService.$inject = ['dataservice', '$q', 'localStorageService'];

  function cartService(dataservice, $q, localStorageService) {
    var localStoragekey = 'ShoppingCart'

    var service = {
      getCurrentShoppingCart: getCurrentShoppingCart
    };

    return service;

    /**
     * [getCurrentShoppingCart description]
     * @param  {[Object]} id [user id for which shopping cart is required]
     * @return {[type]}    [Collection of items in shopping Cart]
     */
    function getCurrentShoppingCart({id}) {
      var deferred = $q.defer();

      //check if data is present in local Stored instance
      //in actual env data would directly be fetched from server
      fetchLocalStoredCart({id}).then(function(localResponse) {
          if (localResponse !== undefined && localResponse !==null) {
            deferred.resolve(processServerReponse(localResponse));
          }else{
            //data not found in localStorage instance . get from mock service
            dataservice.getCurrentShoppingCart(id).then(function(response) {
                storeCartToLocalDb({id},response);

                deferred.resolve(processServerReponse(response));
              }) //dataservice.getCurrentShoppingCart() call
          }//eslse part


        }) //fetchLocalStoredCart() call


      return deferred.promise;
    } //getCurrentShoppingCart


    function fetchLocalStoredCart({id}) {
      var deferred = $q.defer();
      localStorageService.getItem(localStoragekey).then(function(response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    } //fetchLocalStoredCart

    function storeCartToLocalDb({id},CartList){
      var deferred = $q.defer();
      localStorageService.setItem(localStoragekey,CartList).then(function(response) {
        deferred.resolve(CartList);
      });
      return deferred.promise;
    }//storeCartToLocalDb

    /**
     * [processServerReponse description]
     * @param  {[Collection]} response [Server response received for Shopping Cart]
     * @return {[Collection]}          [Data in format required by UI]
     */
    function processServerReponse(response) {
      if (response && response.hasOwnProperty('productsInCart')) {
        return _.map(response.productsInCart, function(obj) {
          return {
            'descr': obj.p_variation + obj.p_name,
            'style': obj.p_style,
            'color': obj.p_selected_color.name,
            'quantity': obj.p_quantity,
            'original_price': obj.p_originalprice,
            'price': obj.p_price,
            'size': obj.p_selected_size.code
          };
        });;
      }

      return [];

    } //processServerReponse


  } //cartService


})();
