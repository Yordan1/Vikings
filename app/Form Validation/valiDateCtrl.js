var validationApp = angular.module('validationApp', []);
validationApp.controller('validateCtrl', function($scope) {				
	$scope.submitForm = function(isValid) {
		if (isValid) { 
			alert('The registration is rdy! See the date below');
		}
	};
});


