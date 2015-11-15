var exzeo = angular.module('exzeo', ["ngRoute", "ui.bootstrap"]);

exzeo.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {

		templateUrl:'views/test.html',
		controller:'apiCtrl'

	});
}]);
