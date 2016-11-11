(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getCurrentShoppingCart:getCurrentShoppingCart
    };

    return service;

    // function getMessageCount() { return $q.when(72); }
    function makeApiCall(){
      var deferred = $q.defer();
        $http.get('http://localhost:8001/api/shoppingCart/1').then(function(response){
            console.log('api call response : '+angular.toJson(response));
            deferred.resolve(response.data);
        });
      return deferred.promise;
    }

    function getCurrentShoppingCart(){
      var deferred = $q.defer();
      makeApiCall().then(function(response){
          deferred.resolve(response);
      });
      // var temp = { 'productsInCart' :[
      //       {
      //          "p_id":"1",
      //          "p_name":"cotton tshirt",
      //          "p_variation":"solid green",
      //          "p_style":"ms13kt1906",
      //          "p_selected_color":{
      //             "name":"blue",
      //             "hexcode":"#1169BD"
      //          },
      //          "p_selected_size":{
      //             "name":"small",
      //             "code":"s"
      //          },
      //          "p_available_options":{
      //             "colors":[
      //                {
      //                   "name":"green",
      //                   "hexcode":"#A3D2A1"
      //                },
      //                {
      //                   "name":"yellow",
      //                   "hexcode":"#F9F8E6"
      //                },
      //                {
      //                   "name":"red",
      //                   "hexcode":"#ED99A8"
      //                }
      //             ],
      //             "sizes":[
      //                {
      //                   "name":"small",
      //                   "code":"s"
      //                },
      //                {
      //                   "name":"medium",
      //                   "code":"m"
      //                },
      //                {
      //                   "name":"large",
      //                   "code":"l"
      //                },
      //                {
      //                   "name":"extra large",
      //                   "code":"xl"
      //                }
      //             ]
      //          },
      //          "p_quantity":1,
      //          "p_originalprice":11.0,
      //          "p_price":11.0,
      //          "c_currency":"$"
      //       },
      //       {
      //          "p_id":"2",
      //          "p_name":"print girls tee",
      //          "p_variation":"pink rainbow",
      //          "p_style":"ms13kt1906",
      //          "p_selected_color":{
      //             "name":"pink",
      //             "hexcode":"#F1DDEF"
      //          },
      //          "p_selected_size":{
      //             "name":"small",
      //             "code":"s"
      //          },
      //          "p_available_options":{
      //             "colors":[
      //                {
      //                   "name":"green",
      //                   "hexcode":"#A3D2A1"
      //                },
      //                {
      //                   "name":"yellow",
      //                   "hexcode":"#F9F8E6"
      //                },
      //                {
      //                   "name":"pink",
      //                   "hexcode":"#F1DDEF"
      //                }
      //             ],
      //             "sizes":[
      //                {
      //                   "name":"small",
      //                   "code":"s"
      //                },
      //                {
      //                   "name":"medium",
      //                   "code":"m"
      //                },
      //                {
      //                   "name":"large",
      //                   "code":"l"
      //                },
      //                {
      //                   "name":"extra large",
      //                   "code":"xl"
      //                }
      //             ]
      //          },
      //          "p_quantity":1,
      //          "p_originalprice":17.0,
      //          "p_price":17.0,
      //          "c_currency":"$"
      //       },
      //       {
      //          "p_id":"3",
      //          "p_name":"flower pattern shirt",
      //          "p_variation":"blue",
      //          "p_style":"ms13kt1906",
      //          "p_selected_color":{
      //             "name":"blue",
      //             "hexcode":"#1169BD"
      //          },
      //          "p_selected_size":{
      //             "name":"small",
      //             "code":"s"
      //          },
      //          "p_available_options":{
      //             "colors":[
      //                {
      //                   "name":"green",
      //                   "hexcode":"#A3D2A1"
      //                },
      //                {
      //                   "name":"blue",
      //                   "hexcode":"#1169BD"
      //                },
      //                {
      //                   "name":"red",
      //                   "hexcode":"#ED99A8"
      //                }
      //             ],
      //             "sizes":[
      //                {
      //                   "name":"small",
      //                   "code":"s"
      //                },
      //                {
      //                   "name":"medium",
      //                   "code":"m"
      //                },
      //                {
      //                   "name":"large",
      //                   "code":"l"
      //                },
      //                {
      //                   "name":"extra large",
      //                   "code":"xl"
      //                }
      //             ]
      //          },
      //          "p_quantity":1,
      //          "p_originalprice":21.0,
      //          "p_price":9.0,
      //          "c_currency":"$"
      //       },
      //       {
      //          "p_id":"4",
      //          "p_name":"check pattern tshirt",
      //          "p_variation":"mens red",
      //          "p_style":"ms13kt1906",
      //          "p_selected_color":{
      //             "name":"red",
      //             "hexcode":""
      //          },
      //          "p_selected_size":{
      //             "name":"small",
      //             "code":"s"
      //          },
      //          "p_available_options":{
      //             "colors":[
      //                {
      //                   "name":"green",
      //                   "hexcode":"#A3D2A1"
      //                },
      //                {
      //                   "name":"yellow",
      //                   "hexcode":"#F9F8E6"
      //                },
      //                {
      //                   "name":"red",
      //                   "hexcode":"#ED99A8"
      //                }
      //             ],
      //             "sizes":[
      //                {
      //                   "name":"small",
      //                   "code":"s"
      //                },
      //                {
      //                   "name":"medium",
      //                   "code":"m"
      //                },
      //                {
      //                   "name":"large",
      //                   "code":"l"
      //                },
      //                {
      //                   "name":"extra large",
      //                   "code":"xl"
      //                }
      //             ]
      //          },
      //          "p_quantity":1,
      //          "p_originalprice":22.0,
      //          "p_price":22.0,
      //          "c_currency":"$"
      //       }
      //    ]};
      //
      //   //  return productsInCart;
      //    deferred.resolve(temp);

         return deferred.promise;
    }

    // function getPeople() {
    //   return $http.get('/api/people')
    //     .then(success)
    //     .catch(fail);
    //
    //   function success(response) {
    //     return response.data;
    //   }
    //
    //   function fail(e) {
    //     return exception.catcher('XHR Failed for getPeople')(e);
    //   }
    // }
  }
})();
