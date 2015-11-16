exzeo.controller('filterCtrl', ['$scope', '$rootScope', '$http', '$routeParams', 'Pagination', function($scope, $rootScope, $http, $routeParams, Pagination){

	var query = $routeParams.category;
	console.log(query);

	$http.get('https://itunes.apple.com/us/rss/topalbums/genre='+query+'/limit=100/json')
  	.success(function(apiData){
			//Checks to make sure data exists.
			if (apiData !== null){
				console.log(apiData.feed.entry);
				$scope.itunesList = apiData.feed.entry;

    	}else{
    		console.log("we got nothing");
    		$location.path('/')
    	};
  	})
	  .error(function(apiData){
	      console.log('NONO ',apiData);
	  });

}]);
