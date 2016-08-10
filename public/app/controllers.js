angular.module('Ctrls', ['ui.router'])
.controller('UserCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.user = {
    email: '',
    name: '',
    password_digest: ''
  }

  $scope.clicked = function() {
    console.log('clicked!');
  }

  $scope.signUp = function() {
    $http.post('/users/create', $scope.user).then(function success(res) {
      $scope.users.push(res.data);
      console.log(res.data);
    }, function error(err) {
      console.log(err);
      alert('Error!');
    });
  }
}])