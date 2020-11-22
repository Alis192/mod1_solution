(function () {
  'use strict';

  angular.module('LunchApp', [])
  .controller('MenuController', MenuController);

  function MenuController ($scope, $filter, $injector) {
      $scope.list = "";
      $scope.message = "";
      $scope.nmOfMeals;


      $scope.message = function () {
        if ($scope.nmOfMeals == 0 ) {
          return "Please enter data first!";
        } else if ($scope.nmOfMeals < 4 && $scope.nmOfMeals != 0) {
          return "Enjoy!";
        } else if ($scope.nmOfMeals > 3) {
          return "Too Much!";
        }
      }

      $scope.checkLunch = function () {
        var meals = $scope.list.split(',');
        $scope.nmOfMeals = meals.length;
        if (meals == "") {
           $scope.nmOfMeals = 0;
        }
      }

  }
})();
