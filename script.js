(function() {
  var app = angular
    .module("githubViewer", [])
    .controller("MainCtrl", function($scope, $http) {
      var onUserComplete = function(response) {
        $scope.user = response.data;
      };

      var onError = function(reason) {
        $scope.error = "Could not fetch the user";
      };

      $http
        .get("https://api.github.com/users/gob77")
        .then(onUserComplete, onError);
    });
})();
