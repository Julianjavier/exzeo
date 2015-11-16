var exzeo = angular.module('exzeo', ["ngRoute", "ui.bootstrap", "simplePagination"]);

exzeo.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {

		templateUrl:'views/test.html',
		controller:'apiCtrl'

	}).when('/filter/:category', {

		templateUrl:'views/filtered.html',
		controller:'filterCtrl'

	});

}]);
