exzeo.controller('apiCtrl', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http){
	$http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  	.success(function(apiData){
    	if (apiData !== null){
				console.log(apiData.feed.entry);
				var list = [{ id: 'null', label: 'Choose a gener:' }]
				$scope.list = list;
		    var iterator = [];

				$scope.itunesList = apiData.feed.entry;
				$scope.defaultVar = $scope.list[0];

				angular.forEach(apiData.feed.entry, function(value) {
					// console.log(value.category.attributes);
					var key = value.category.attributes["im:id"]

					if(iterator.indexOf(key) === -1) {
							iterator.push(key);
							list.push({id:key , label:value.category.attributes.label});
					}
				});
				console.log(list)

    	}else{
    		console.log("we got nothing");
    		$location.path('/')
    	};
  	})
	  .error(function(apiData){
	      console.log('NONO ',apiData);
	  });
}]);
