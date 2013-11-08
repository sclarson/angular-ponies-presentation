var PonySearch  = angular.module("PonySearch", []);

PonySearch.controller("MainCtrl", ["$scope", function($scope){
	$scope.message = "Enter a keyword.";

	$scope.search = function(){
		$scope.results = [
				{name:"Rainbow Dash", type:"Pegasus"},
				{name:"Twilight Sparkle", type:"Pegasus"}, 
				{name:"Applejack", type:["Earth","Normal"]}
				];
	}
}]);