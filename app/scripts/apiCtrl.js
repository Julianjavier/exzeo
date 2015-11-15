exzeo.controller('apiCtrl', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http){
	console.log("SCRIPT IS ACTIVE");
	$http.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  	.success(function(apiData){
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
