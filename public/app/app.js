var app = angular.module('myApp', ['Ctrls', 'ui.router', 'auth0', 'angular-storage', 'angular-jwt', 'ngRoute']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$routeProvider', 'authProvider', '$httpProvider', 'jwtInterceptorProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider, authProvider, $httpProvider, jwtInterceptorProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/main.html'
  })
  .state('signup', {
    url: '/users/signup',
    templateUrl: 'app/views/signup.html',
    controller: 'SignupCtrl'
  })
  .state('login', {
    url: '/users/login',
    templateUrl: 'app/views/login.html',
    controller: 'LoginCtrl'
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
  .state('posts', {
    url: '/posts',
    templateUrl: 'app/views/posts.html',
    controller: 'PostCtrl',
    data: {
      requiresLogin: true
    }
  })
  .state('newpost', {
    url: '/posts/new',
    templateUrl: 'app/views/newpost.html',
    controller: 'PostCtrl',
    data: {
      requiresLogin: true
    }
  });

  authProvider.init({
    domain: 'mean-hackathon.auth0.com',
    clientID: 'ZWivMidCimKqXM2Y7braT2p0VWmPYbvS',
    loginUrl: '/users/login'
  });

  // Called when login is successful
  authProvider.on('loginSuccess', ['$location', 'profilePromise', 'idToken', 'store',
    function($location, profilePromise, idToken, store) {
      console.log('Login Successful');
      profilePromise.then(function(profile) {
        store.set('profile', profile);
        store.set('token', idToken);
      });

      $location.path('/');
  }]);

  // Called when login fails
  authProvider.on('loginFailure', function () {
    alert("Login error");
  });

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');
}]);

app.run(['auth', function(auth) {
  // This hooks all auth events to check everything as soon as the app starts
  auth.hookEvents();
}]);

// Angular HTTP interceptor function
jwtInterceptorProvider.tokenGetter = ['store', function(store) {
  return store.get('token');
}];

// Push interceptor function to $httpProvider's interceptors
$httpProvider.interceptors.push('jwtInterceptor');

// app.controller('UserCtrl', ['$scope', '$http', function($scope, $http) {

// }]);
