var app = angular.module("MovieSearch", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/:movie', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/movie/:id', {
        templateUrl: 'partials/movie.html',
        controller: 'MovieController'
    });
      $locationProvider.html5Mode(true);
  });
