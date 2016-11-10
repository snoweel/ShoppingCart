(function() {
  angular.module('app.core')
    .factory('productsService', productsService);


  productsService.$inject = ['dataservice', '$q'];

  function productsService(dataservice, $q) {


    var service = {
      getProductById: getProductById
    };

    return service;

    /**
     * [getCurrentShoppingCart description]
     * @param  {[Object]} id [user id for which shopping cart is required]
     * @return {[type]}    [Collection of items in shopping Cart]
     */
    function getProductById({
      style
    }) {
      var filterCrit = angular.copy(style);
      var deferred = $q.defer();
      dataservice.getCurrentShoppingCart().then(function(response) {

          deferred.resolve(processServerReponse(response, filterCrit));
        }) //dataservice.getCurrentShoppingCart() call



      return deferred.promise;
    } //getCurrentShoppingCart

    /**
     * [processServerReponse description]
     * @param  {[Collection]} response [Server response received for Shopping Cart]
     * @return {[Collection]}          [Data in format required by UI]
     */
    function processServerReponse(response, filterCrit) {
      if (response && response.hasOwnProperty('productsInCart')) {
        return _.omit(_.find(response.productsInCart, {
          p_style: filterCrit
        }), ['p_selected_color', 'p_selected_size']);
      }

      return [];

    } //processServerReponse


  } //productsService


})();
