var Glider = angular.module("Glider", []);

Glider.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
             } else {
                 scope.boolChangeClass = false;
             }
            scope.$apply();
        });
    };
})


Glider.controller("header", function($scope) {

	$scope.MenuActive = false;
  $scope.MegamenuActive = false;
  $scope.UnSkewed = false;

  $scope.activeMenu = function() {
    $scope.MenuActive = !$scope.MenuActive;
  }

  $scope.activeMegaMenu = function() {
    $scope.MegamenuActive = !$scope.MegamenuActive;
  }

  $scope.unSkew = function() {
    $scope.UnSkewed = !$scope.UnSkewed;
  }
});
