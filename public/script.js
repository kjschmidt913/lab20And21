var app=angular.module('factsApp',[]);
 app.factory('factServe', function($http){
 	return $http.get('/api/factstuff');

 });

 
