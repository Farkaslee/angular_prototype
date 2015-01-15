'use strict';

/*user controllers*/
var userController = angular.module('userController', ['ui.router']);

userController.controller('loginController', function ($scope,$http,$window,$location,$state) {
	$scope.userInfo = function(){
		var user = {
            "username" : $scope.username,
            "password" : $scope.password,
            "isRemember" :$scope.isRemember
        };
        console.log("post data : " + user.username);

        $http.post(serviceSiteUrl + "oauth/token?client_id=talanga&client_secret=talanga&grant_type=password&scope=read write&username=" + user.username + "&password=" + user.password)
                .success(function(data, status, headers) {
                    console.log("data :" + data.access_token);
                    console.log("status :" + status);
                    console.log("headers :" + headers);
                    $window.sessionStorage.token = data.access_token;
                    
                    $state.go('controlPanel');
                });

	}
	
});