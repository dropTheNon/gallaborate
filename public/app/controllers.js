angular.module('Ctrls', ['ui.router', 'Services'])
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
.controller('NewPostCtrl', ['$scope', '$location', 'Post', function($scope, $location, Post) {

  $scope.post = {
    // User_id hard-coded for now, for testing - REMOVE BEFORE PRODUCTION
    // user_id: '57ab85fd350dee72d0d22cce',
    title: '',
    iAmA: '',
    description: '',
    video_url: '',
    image_url: '',
    tag_ids: []
  }

  $scope.createPost = function() {
    Post.save($scope.post, function success(data) {
      $location.path('/posts');
    }, function error(data) {
      console.log(data);
    });
  };
}])
.controller('PostCtrl', ['$scope', '$stateParams', 'Post', function($scope, $stateParams, Post) {

  $scope.post = {};

  Post.get({ id: $stateParams.id }, function success(data) {
    console.log($stateParams.id);
    console.log(data);
    $scope.post = data;
  }, function error(data) {
    console.log(data);
  });
  
}])
.controller('PostsCtrl', ['$scope', 'Post', function($scope, Post) {
  $scope.allPosts = [];
  
  Post.query(function success(data) {
    $scope.allPosts = data;
    console.log(data);
  }, function error(data) {
    console.log(data);
  });
}])