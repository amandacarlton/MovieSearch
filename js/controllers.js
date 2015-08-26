

app.controller('HomeController', function($scope, $http, $location){
  $scope.findMovie= function () {
    $http.get("http://www.omdbapi.com/?s="+$scope.movie).then(function (data) {
      console.log(data.data);
      $scope.movies = data.data.Search;
      $location.path("/"+$scope.movie);
      $scope.movie="";
    });
  };

});

app.controller('MovieController', function ($scope, $http, $routeParams) {
  $http.get("http://www.omdbapi.com/?i="+$routeParams.id).then(function (data) {
      console.log(data.data);
      $scope.movie = data.data;
  });
});
