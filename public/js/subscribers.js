var app = angular.module('app', []);

app.controller('sub', ['$scope', '$http', function($scope, $http){

		//$scope.sub_show_me = false;
		// Send message
		$scope.subscriber = {};
		
		$scope.sending = function(){
			$http.post('/users/subscribe', $scope.subscriber).success(function(info){
				$scope.subscriber = null;
			});
		}

	}]);



app.controller('con', ['$scope', '$http', function($scope, $http){

		//$scope.con_show_me = false;
		// Send message
		$scope.contact = {};
		
		$scope.send = function(){
			$http.post('/users/contact', $scope.contact).success(function(info){
				$scope.contact = null;
				
			});
		}

	}]);