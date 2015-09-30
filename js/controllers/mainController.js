// Controller de la vue Form 1.
angular.module('myApp')
	.controller('mainController', function($scope, Friends){
		$scope.friends = Friends.getFriends();
	});