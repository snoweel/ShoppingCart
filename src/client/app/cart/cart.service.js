(function() {
  angular.module('app.core')
    .factory('cartService', cartService);


  cartService.$inject = ['dataservice', '$q'];

  function cartService(dataservice, $q) {


    var service = {
        getCurrentShoppingCart:getCurrentShoppingCart
    };

    return service;

    /**
     * [getCurrentShoppingCart description]
     * @param  {[Object]} id [user id for which shopping cart is required]
     * @return {[type]}    [Collection of items in shopping Cart]
     */
    function getCurrentShoppingCart({id}) {
      var deferred = $q.defer();
      dataservice.getCurrentShoppingCart(id).then(function(response) {

        deferred.resolve(processServerReponse(response));
      })

      return deferred.promise;
    } //getCurrentShoppingCart

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
            'original_price': obj.p_originalprice
          };
        });;
      }

      return [];

    } //processServerReponse


  } //cartService


})();
