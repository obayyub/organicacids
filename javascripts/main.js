myApp = angular.module('myApp', []);
myApp.filter('fuzzyFilter', function () {
	return function (items, searchText) {
		var searchWords;
	
		if (searchText) {
			searchWords = searchText.split(' ');
	
			return _.filter(items, function (item) {
				var itemText = _.values(item).join(' ').toLowerCase();
	
				return _.every(searchWords, function (searchWord) {
					return itemText.search(searchWord.toLowerCase()) !== -1;
				});
			});
		} else {
			return [];
		}
	};
});
myApp.controller('MyCtrl', ['$scope', '$http', function($scope, $http){
	$http({method: 'GET', url: './javascripts/organicacids.json'}).
		success(function(data, status, headers, config) {
  			$scope.organicAcids = data;
  			$scope.boom = [0, 1, 2, 3];
		}).
		error(function(data, status, headers, config) {
			console.log('couldnt grab json');
		});
}]);

