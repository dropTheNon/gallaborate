angular.module('Services', ['ngResource'])
.factory('Post', ['$resource', function($resource) {
  return $resource('/api/posts');
}]);