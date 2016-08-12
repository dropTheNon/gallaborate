angular.module('Services', ['ngResource'])
.factory('Post', ['$resource', function($resource) {
  return $resource('/api/posts/:id');
}])
.factory('NewPost', ['$resource', function($resource) {
  return $resource('/posts/new');
}]);