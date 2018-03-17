var app = angular.module('tOdO', []);
app.controller('tOdOController', function ($scope) {
    $scope.todoList = [{todoText: 'Finish this app', done: false}];
    $scope.todoAdd = function () {
      $scope.todoList.push({todoText: $scope.todoInput,  done: false});
      $scope.todoInput = '';
    };
    $scope.remove = function () {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function (x) {
            if (!x.done) $scope.todoList.push(x);
        })
    }
});
