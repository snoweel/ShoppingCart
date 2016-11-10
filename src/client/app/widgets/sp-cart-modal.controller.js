(function() {
  'use strict';

  angular
    .module('app.widgets')
    .controller('ShoppingCartModalController', ShoppingCartModalController);

  // ShoppingCartModalController.$inject = [];
  /* @ngInject */
  function ShoppingCartModalController($scope, $mdDialog) {
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


}());
