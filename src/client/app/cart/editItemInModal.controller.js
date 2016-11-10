(function() {
  'use strict';

  angular
    .module('app.cart')
    .controller('EditItemInModalController', EditItemInModalController);

  // EditItemInModalController.$inject = [];
  /* @ngInject */
  function EditItemInModalController($scope, $mdDialog,item,product) {
    console.log(`item : ${item}`);
    console.log(`product : ${product}`);
    var MAX_BUY_COUNT = 50;
    $scope.Qty = _.range(1,MAX_BUY_COUNT);

    // var vm = this;
    $scope.item =angular.copy(item);
    $scope.product =product;

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  } //EditItemInModalController


}());
