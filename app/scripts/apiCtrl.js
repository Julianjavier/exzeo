exzeo.controller('apiCtrl', ['$scope', '$rootScope','$http', '$location', 'Pagination', function($scope, $rootScope, $http, $location, Pagination){
	$http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  	.success(function(apiData){
			//Checks to make sure data exists.
			if (apiData !== null){
				console.log(apiData.feed.entry);
				//sets list for top 100 filter.
				var list = [{ id: 'null', label: 'Choose a gener:' }]
				$scope.list = list;
				//iterator to remove duplicate entries in the select list.
				var iterator = [];

				$scope.itunesList = apiData.feed.entry;
				$scope.selectVar = $scope.list[0];

				angular.forEach(apiData.feed.entry, function(value) {
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

		$scope.submit = function(){
			var category = $scope.selectVar.id;
			if (category) {
				console.log(category);
				$location.path('/filter/'+category);
			};
		};

}]);
