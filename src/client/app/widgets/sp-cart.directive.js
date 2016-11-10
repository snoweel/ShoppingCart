(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('spShoppingCart', spShoppingCart);

  /* @ngInject */
  function spShoppingCart() {
    //Usage:
    //<div ht-widget-header title="vm.map.title"></div>
    // Creates:
    // <div ht-widget-header=""
    //      title="Movie"
    //      allow-collapse="true" </div>
    var directive = {
      scope: {},
      template: '<md-button class="md-raised" aria-label="Learn More" ng-click="vm.openShoppinCart()">  Cart</md-button>',
      restrict: 'E',
      link: link,
      controllerAs: 'vm',
      controller: ShoppingCartController,
      bindToController: true // because the scope is isolated
    };
    return directive;

    function link(scope, element, attr) {
      console.dir(element);
      // scope.toggleContent = function() {
      //   if (scope.allowCollapse === 'true') {
      //     var content = angular.element(element).siblings('.widget-content');
      //     content.toggle();
      //   }
      // };
    }
  }

  angular
    .module('app.widgets')
    .controller('ShoppingCartController', ShoppingCartController);

  ShoppingCartController.$inject = ['$scope', '$mdDialog'];

  function ShoppingCartController($scope, $mdDialog) {
    // Injecting $scope just for comparison
    var vm = this;

    vm.openShoppinCart = function(ev) {
      console.log('loggin for now');
      $mdDialog.show({
          controller: ShoppingCartModalController,
          templateUrl: 'app/widgets/sp-cart-modal.template.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });

    }


  } //ShoppingCartController

  ShoppingCartModalController.$inject = ['$scope', '$mdDialog'];

  function ShoppingCartModalController($scope, $mdDialog) {
    // Injecting $scope just for comparison
    var vm = this;

    vm.ShoppingCartData = {
       "productsInCart":[
          {
             "p_id":"1",
             "p_name":"cotton tshirt",
             "p_variation":"solid green",
             "p_style":"ms13kt1906",
             "p_selected_color":{
                "name":"blue",
                "hexcode":"#1169BD"
             },
             "p_selected_size":{
                "name":"small",
                "code":"s"
             },
             "p_available_options":{
                "colors":[
                   {
                      "name":"green",
                      "hexcode":"#A3D2A1"
                   },
                   {
                      "name":"yellow",
                      "hexcode":"#F9F8E6"
                   },
                   {
                      "name":"red",
                      "hexcode":"#ED99A8"
                   }
                ],
                "sizes":[
                   {
                      "name":"small",
                      "code":"s"
                   },
                   {
                      "name":"medium",
                      "code":"m"
                   },
                   {
                      "name":"large",
                      "code":"l"
                   },
                   {
                      "name":"extra large",
                      "code":"xl"
                   }
                ]
             },
             "p_quantity":1,
             "p_originalprice":11.0,
             "p_price":11.0,
             "c_currency":"$"
          },
          {
             "p_id":"2",
             "p_name":"print girls tee",
             "p_variation":"pink rainbow",
             "p_style":"ms13kt1906",
             "p_selected_color":{
                "name":"pink",
                "hexcode":"#F1DDEF"
             },
             "p_selected_size":{
                "name":"small",
                "code":"s"
             },
             "p_available_options":{
                "colors":[
                   {
                      "name":"green",
                      "hexcode":"#A3D2A1"
                   },
                   {
                      "name":"yellow",
                      "hexcode":"#F9F8E6"
                   },
                   {
                      "name":"pink",
                      "hexcode":"#F1DDEF"
                   }
                ],
                "sizes":[
                   {
                      "name":"small",
                      "code":"s"
                   },
                   {
                      "name":"medium",
                      "code":"m"
                   },
                   {
                      "name":"large",
                      "code":"l"
                   },
                   {
                      "name":"extra large",
                      "code":"xl"
                   }
                ]
             },
             "p_quantity":1,
             "p_originalprice":17.0,
             "p_price":17.0,
             "c_currency":"$"
          },
          {
             "p_id":"3",
             "p_name":"flower pattern shirt",
             "p_variation":"blue",
             "p_style":"ms13kt1906",
             "p_selected_color":{
                "name":"blue",
                "hexcode":"#1169BD"
             },
             "p_selected_size":{
                "name":"small",
                "code":"s"
             },
             "p_available_options":{
                "colors":[
                   {
                      "name":"green",
                      "hexcode":"#A3D2A1"
                   },
                   {
                      "name":"blue",
                      "hexcode":"#1169BD"
                   },
                   {
                      "name":"red",
                      "hexcode":"#ED99A8"
                   }
                ],
                "sizes":[
                   {
                      "name":"small",
                      "code":"s"
                   },
                   {
                      "name":"medium",
                      "code":"m"
                   },
                   {
                      "name":"large",
                      "code":"l"
                   },
                   {
                      "name":"extra large",
                      "code":"xl"
                   }
                ]
             },
             "p_quantity":1,
             "p_originalprice":21.0,
             "p_price":9.0,
             "c_currency":"$"
          },
          {
             "p_id":"4",
             "p_name":"check pattern tshirt",
             "p_variation":"mens red",
             "p_style":"ms13kt1906",
             "p_selected_color":{
                "name":"red",
                "hexcode":""
             },
             "p_selected_size":{
                "name":"small",
                "code":"s"
             },
             "p_available_options":{
                "colors":[
                   {
                      "name":"green",
                      "hexcode":"#A3D2A1"
                   },
                   {
                      "name":"yellow",
                      "hexcode":"#F9F8E6"
                   },
                   {
                      "name":"red",
                      "hexcode":"#ED99A8"
                   }
                ],
                "sizes":[
                   {
                      "name":"small",
                      "code":"s"
                   },
                   {
                      "name":"medium",
                      "code":"m"
                   },
                   {
                      "name":"large",
                      "code":"l"
                   },
                   {
                      "name":"extra large",
                      "code":"xl"
                   }
                ]
             },
             "p_quantity":1,
             "p_originalprice":22.0,
             "p_price":22.0,
             "c_currency":"$"
          }
       ]
    };

    $scope.cartItemsDisplay = _.map(vm.ShoppingCartData.productsInCart,function(obj){ return {'descr':obj.p_variation+obj.p_name,'style':obj.p_style,'color':obj.p_selected_color.name,'quantity':obj.p_quantity,'original_price':obj.p_originalprice};});

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };

  } //ShoppingCartModalController

})();
