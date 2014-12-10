'use strict';

var app = angular.module('app', [
	'ui.router',
	'app.home'
]);

app.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {

	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});
