var PonySearch  = angular.module("PonySearch", []);

PonySearch.controller("MainCtrl", ["$scope", function($scope){
	$scope.message = "Enter a keyword.";

	$scope.search = function(){
		$scope.results = ["Rainbow Dash", "Twilight Sparkle", "Applejack"];
	}
}]);