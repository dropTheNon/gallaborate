angular.module('Ctrls', ['ui.router'])
.controller('UserCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.user = {
    email: '',
    name: '',
    password_digest: ''
  }

  $scope.signUp = function() {
    $http.post('/users/create', $scope.user).then(function success(res) {
      $scope.users.push(res.data);
    }, function error(err) {
      alert("An error has occurred. That's a bummer...");
    });
  }
}])
.controller('PostCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.post = {
    // User_id hard-coded for now, for testing - REMOVE BEFORE PRODUCTION
    user_id: '57ab85fd350dee72d0d22cce',
    title: '',
    iAmA: '',
    description: '',
    video_url: '',
    image_url: '',
    tag_ids: []
  }

  $scope.createPost = function() {
    $http.post('/posts/new', $scope.post).then(function success(res) {
      console.log("res: ", res);
      console.log("success!");
      // $scope.posts.push(res.data);
    }, function error(err) {
      alert("An error has occurred. That's a bummer...");
    });
  }

}]);