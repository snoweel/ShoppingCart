(function() {
  angular.module('app.core')
    .factory('wishlistService', wishlistService);


  wishlistService.$inject = ['localStorageService', '$q'];

  function wishlistService(localStorageService, $q) {

    var key = 'wishlist';
    var service = {
      getMyWishList: getMyWishList,
      additemToWishList:additemToWishList
    };

    return service;

    /**
     * [setWishList updates user local stored wishlist]
     * @param {[type]} id      [user for which wishlist needs to be set ]
     * @param {[type]} itemObj [item which needs to be added to the wishlist]
     */
    function additemToWishList({id }, itemObj) {
      var deferred = $q.defer();
      getWishLists({
        id
      }).then(function(response) {
        if (response) {
          response.push(angular.copy(itemObj));
        }
        var tempOb = {};
        tempOb[id] = angular.copy(response);
        localStorageService.setItem(key, tempOb).then(function(response) {
          deferred.resolve(true);
        })
      })

      return deferred.promise;

    } //additemToWishList

    /**
     * [getWishLists gets local stored wishlist]
     * @return {[type]} [description]
     */
    function getWishLists() {
      //            console.log('inside localStorageService->getItem() for key '+key);
      var deferred = $q.defer();

      localStorageService.getItem(key).then(function(data) {
        if (data) {
          deferred.resolve(data)
        }
        deferred.resolve([])

        //                  console.log('key :'+key +'<-> value :'+angular.toJson(data));
      }); //$localForage.getItem

      return deferred.promise;

    } //getItem


    /**
     * [getMyWishList gets wish for the user]
     * @param  {[type]} id [user for whom wishlist being fetched]
     * @return {[type]}    [Users wishlist]
     */
    function getMyWishList({
        id
      }) {
        var deferred = $q.defer();
        getWishLists().then(function(response) {
          if (data && data.hasOwnProperty(id)) {
            deferred.resolve(data[id]);
          }

          deferred.resolve([])
        })
        return deferred.promise;
      } //getMyWishList


  } //wishlistService


})();
