angular.module('rtfmApp').controller('threadsCtrl', function(threadsRef, $scope, $firebaseArray) {

	$scope.threads = $firebaseArray(threadsRef);

	$scope.threads.$loaded().then(function(threads) {
		});

	$scope.createThread = function(username, title) {
		$scope.threads.$add({
			username: username,
			title: title
		});
	};
});
