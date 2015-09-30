var myApp = angular.module('myApp', ['ngRoute']);

// Définition des redirections en fonction du chemin demandé.
myApp.config(function($routeProvider){
	$routeProvider
		// Racine du site => Vue Form 1
		.when('/', {
			title: 'Form 1',
			controller: 'form1Controller',
			templateUrl: 'templates/form1.html'
		})
		// Chemin de la vue Form 1
		.when('/form1', {
			title: 'Form 1',
			controller: 'form1Controller',
			templateUrl: 'templates/form1.html'
		})
		// Chemin de la vue Form 2
		.when('/form2', {
			title: 'Form 2',
			controller: 'form2Controller',
			templateUrl: 'templates/form2.html'
		})
		// Chemin de la vue Form 3
		.when('/form3', {
			title: 'Form 3',
			controller: 'form3Controller',
			templateUrl: 'templates/form3.html'
		})
		.when('/404', {
			title: 'Page non trouvée',
			controller: '',
			templateUrl: '404.html'
		})
		// Si le chemin n'est pas connu, on envoie sur la racine.
		.otherwise({redirectTo: '/404'});
});

// Ajout d'un traitement sur l'évènement "OnRouteSuccess".
myApp.run(['$rootScope', function($rootScope){
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous){
		$rootScope.title = current.$$route.title;
	});
}]);