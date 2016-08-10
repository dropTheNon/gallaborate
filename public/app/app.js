var myApp = angular.module('myApp', ['Ctrls', 'ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/main.html'
  })
  .state('posts', {
    url: '/posts',
    templateUrl: 'app/views/posts.html',
    controller: 'PostCtrl'
  })
  .state('newpost', {
    url: '/posts/new',
    templateUrl: 'app/views/newpost.html',
    controller: 'PostCtrl'
  })
  .state('profile', {
    url: '/users/:id',
    templateUrl: 'app/views/profile.html',
    controller: 'UserCtrl'
  })
  .state('editprofile', {
    url: '/users/:id/edit',
    templateUrl: 'app/views/profile.html',
    controller: 'UserCtrl'
  })

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');
}]);

// myApp.controller('UserCtrl', ['$scope', '$http', function($scope, $http) {

// }]);
