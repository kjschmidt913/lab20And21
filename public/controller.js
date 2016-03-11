var app=angular.module('factsApp');
	app.controller('factCTRL',['$scope', 'factServe', function($scope, factServe){
		factServe.then(function(response){

			$scope.showFact=response.data;

		});
	}]);