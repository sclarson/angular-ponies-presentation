var PonySearch  = angular.module("PonySearch", []);

PonySearch.controller("MainCtrl", ["$scope", "$http", function($scope,$http){
	$scope.message = "Enter a keyword.";
	
	
	$scope.search = function(){
		$http.get('/ponies.json').then(
			function(response){ // SUCCESS
				var data = response.data;
				console.log(response);
				var results = [];
				for(var i = 0; i < data.length; i++){
					var result = {};
					result.image = data[i].image;
					result.name = data[i].name;
					result.type = data[i].type;
					results.push(result);
				}
				$scope.results = results;
			},
			function(response){ // FAILURE
				$scope.results = [];
				$scope.message = "OH NOES!!! AN ERROR PREVENTED PONIES!!!!"
			}
		);
	}
}]);