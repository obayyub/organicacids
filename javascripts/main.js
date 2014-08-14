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
			return items;
		}
	};
});
myApp.controller('MyCtrl', ['$scope', '$http', function($scope, $http){
	$http({method: 'GET', url: './javascripts/organicacids.json'}).
		success(function(data, status, headers, config) {
  			dataLength = data.length;
  			$scope.filteredOrganics = data;
  			$scope.elutionRestrict = function(restrict){
  				j = 0;
  				$scope.filteredOrganics = [];
  				intRestrict = parseInt(restrict);
  				for(i=0;i<dataLength;i++){
  					rLow = intRestrict - 1.5;
  					rHigh = intRestrict + 1.5;
  					if(data[i]['Elution Time'] > rLow && data[i]['Elution Time'] < rHigh){
  						$scope.filteredOrganics[j] = data[i];
  						j++;
  					}
  				}
  			}
  			$scope.removeRestrict = function(){
  				console.log('boom');
  				$scope.qElution = "";
  				$scope.filteredOrganics = data;
  			}
		}).
		error(function(data, status, headers, config) {
			console.log('couldnt grab json');
		});
}]);

//boom