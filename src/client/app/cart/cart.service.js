(function() {
  angular.module('app.cart')
    .factory('cartService', cartService);


  cartService.$inject = ['dataservice', '$q', 'localStorageService'];

  function cartService(dataservice, $q, localStorageService) {
    var localStoragekey = 'ShoppingCart'

    var service = {
      getCurrentShoppingCart: getCurrentShoppingCart,
      storeCartToLocalDb: storeCartToLocalDb,
      calulateDiscount: calulateDiscount,
      calulateBill:calulateBill
    };

    return service;

    /**
     * [getCurrentShoppingCart fecthes the ShoppingCart ]
     * @param  {[Object]} id [user id for which shopping cart is required]
     * @return {[type]}    [Collection of items in shopping Cart]
     */
    function getCurrentShoppingCart({
      id
    }) {
      var deferred = $q.defer();

      //check if data is present in local Stored instance
      //in actual env data would directly be fetched from server
      fetchLocalStoredCart({
          id
        }).then(function(localResponse) {
          if (localResponse !== undefined && localResponse !== null) {
            deferred.resolve(localResponse);
          } else {
            //data not found in localStorage instance . get from mock service
            dataservice.getCurrentShoppingCart(id).then(function(response) {
                storeCartToLocalDb({
                  id
                }, processServerReponse(response));

                deferred.resolve(processServerReponse(response));
              }) //dataservice.getCurrentShoppingCart() call
          } //eslse part


        }) //fetchLocalStoredCart() call


      return deferred.promise;
    } //getCurrentShoppingCart

    /**
     * [fetchLocalStoredCart fetches ShoppingCart from local storage]
     * @param  {[type]} id [user from whom ShoppingCart is being fetched]
     * @return {[type]}    [description]
     */
    function fetchLocalStoredCart({
      id
    }) {
      var deferred = $q.defer();
      localStorageService.getItem(localStoragekey).then(function(response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    } //fetchLocalStoredCart

    /**
     * [storeCartToLocalDb stores the ShoppingCart to local storage]
     * @param  {[type]} id       [user whose ShoppingCart is being stored]
     * @param  {[type]} CartList [ShoppingCart being stored]
     * @return {[type]}          [description]
     */
    function storeCartToLocalDb({
      id
    }, CartList) {
      var deferred = $q.defer();
      localStorageService.setItem(localStoragekey, CartList).then(function(response) {
        deferred.resolve(CartList);
      });
      return deferred.promise;
    } //storeCartToLocalDb

    /**
     * [processServerReponse description]
     * @param  {[Collection]} response [Server response received for Shopping Cart]
     * @return {[Collection]}          [Data in format required by UI]
     */
    function processServerReponse(response) {
      if (response && response.hasOwnProperty('productsInCart')) {
        return _.map(response.productsInCart, function(obj) {
          return {
            'descr': _.upperCase(obj.p_variation + ' '+ obj.p_name),
            'style': obj.p_style,
            'color': obj.p_selected_color.name,
            'quantity': obj.p_quantity,
            'original_price': obj.p_originalprice,
            'price': obj.p_price,
            'size': _.upperCase(obj.p_selected_size.code),
            'currency': obj.c_currency
          };
        });;
      }

      return [];

    } //processServerReponse

/**
 * [calulateBill computes estimated bill from ShoppingCart ]
 * @param  {[type]}  list                [ShoppingCart ]
 * @param  {Boolean} isDiscountToBeGiven [booleanflag for discount to be given]
 * @return {[type]}                      [description]
 */
    function calulateBill(list,isDiscountToBeGiven) {
      console.log('BIll to Be calculated on : ' + angular.toJson(list));
      // need to connvert names to Constants
      var inComputeBillList = _.map(list, function(a) {
        return {
          count: a.quantity,
          subTotal: a.price * a.quantity
        }
      });
      var count = _.reduce(inComputeBillList, (z, a) => z = z + a.count, 0);
      var subTotal = _.reduce(inComputeBillList, (z, a) => z = z + a.subTotal, 0);
      var discount = calulateDiscount(isDiscountToBeGiven,count,subTotal);



      var Total =subTotal-discount;

      // var finalBill ={count,subTotal};
      return {
        count,
        subTotal,
        discount,
        Total
      };

    } //calulateDiscount

    /**
     * [calulateDiscount computes discount if flag is true]
     * @param  {Boolean} isDiscountToBeGiven [booleanflag for discount to be given]
     * @param  {[type]}  count               [count of items in Cart]
     * @param  {[type]}  subTotal            [price of each item in list]
     * @return {[type]}                      [description]
     */
    function calulateDiscount(isDiscountToBeGiven,count,subTotal){
      var discount=0;
      if(isDiscountToBeGiven===true){
        switch (true) {
          case count === 3:
            discount = 0.05*subTotal;
            break;
          case count > 3 && count <= 6:
            discount = 0.1*subTotal;
            break;
          case count > 6 && count <= 10:
          //assume its 0.1 only
            discount = 0.15*subTotal;
            break;
          case count > 10:
            discount = 0.25*subTotal;
            break;
        }
      }

      return discount;
    }//calulateDiscount


  } //cartService


})();
