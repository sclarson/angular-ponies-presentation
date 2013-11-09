var PonySearch  = angular.module("PonySearch", []);

PonySearch.service("PonyPopulator", ["$http", function($http){
	this.fetchAll = function(){
		var results = [];
		$http.get('/ponies.json').then( // data access layer stuff in service :)
			function(response){ // SUCCESS
				var data = response.data;
				console.log(response);
				for(var i = 0; i < data.length; i++){
					var result = {};
					result.image = data[i].image;
					result.name = data[i].name;
					result.type = data[i].type;
					results.push(result);
				}
			},
			function(response){ // FAILURE
				console.log("Request for /ponies.json failed");
			}
		);

		return results;
	};
}])

PonySearch.controller("MainCtrl", ["$scope", "PonyPopulator", function($scope,PonyPopulator){
	$scope.message = "Enter a keyword.";
	
	$scope.search = function(){
		$scope.results = PonyPopulator.fetchAll();
	}
}]);

PonySearch.directive("pony", function(){
	return {
		restrict: 'E', // subset of EACM (element attribut class comment) 
		required: "^result",
		template: '<div class="pony"><div>Name: <span ng-bind="result.name" /></div><img ng-src="{{result.image}}" style="width:100px; height:100px;" /></div>',
        replace: true
	}
});