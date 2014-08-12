myApp = angular.module('myApp', [])
	.controller('MyCtrl', ['$scope', '$http', function($scope, $http){
		$http({method: 'GET', url: './javascripts/organicacids.json'}).
    		success(function(data, status, headers, config) {
      			$scope.organicAcids = data;
      			$scope.boom = [0, 1, 2, 3];
    		}).
    		error(function(data, status, headers, config) {
    			console.log('couldnt grab json');
    		});
	}]);