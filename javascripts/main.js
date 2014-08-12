myApp = angular.module('myApp', [])
	.controller('MyCtrl', ['$scope', '$http', function($scope, $http){
		$http({method: 'GET', url: './javascripts/organicacids.json'}).
    		success(function(data, status, headers, config) {
    			console.log(data);
      			$scope.organicAcids = data;
    		}).
    		error(function(data, status, headers, config) {
    			console.log('couldnt grab json');
    		});
	}]);