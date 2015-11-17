exzeo.controller('apiCtrl', ['$scope', '$rootScope','$http', '$location', 'Pagination', function($scope, $rootScope, $http, $location, Pagination){
	//variable to be used to show or hide the proper filtered entries
	$scope.filter = false

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

				//sets the fist call from the api
				$scope.itunesList = apiData.feed.entry;
				//sets default variable for the select list
				$scope.selectVar = $scope.list[0];

				//sets the values for the categories only found in the top 100
				angular.forEach(apiData.feed.entry, function(value) {
					var key = value.category.attributes["im:id"]
					if(iterator.indexOf(key) === -1) {
							iterator.push(key);
							list.push({id:key , label:value.category.attributes.label});
					}
				});

    	}else{
    		console.log("we got nothing");
    		$location.path('/')
    	};
  	})
	  .error(function(apiData){
	      console.log('NONO ',apiData);
	  });

		$scope.submit = function(value){
			$scope.filter = true;
			$scope.filteredList = [];
			var gener = $scope.selectVar.label;
			angular.forEach($scope.itunesList, function(value, key) {
				if (value.category.attributes.label === gener) {
					$scope.filteredList.push(value)
				}
			});

			console.log($scope.filteredList);

		};

}]);
