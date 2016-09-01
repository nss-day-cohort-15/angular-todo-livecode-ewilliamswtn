"use strict";

app.controller("TodoCtrl", function($scope, $location) {

$scope.newItem = function() {
  $location.url('/items/new');
};

$scope.allItem = function() {
  $location.url('/items/list');
};

$scope.addNewItem = function() {
  $scope.newTask.isCompleted = false;
  $scope.newTask.id = $scope.items.length;
  $scope.items.push($scope.newTask);
  $scope.newTask = {};
};

});