'use strict';
/**
 * New node file
 */
var httpInterceptor = angular.module("httpInterceptor", []);

httpInterceptor.factory("httpInterceptorFactory", function($rootScope, $q, $window) {
    return {
        request : function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = "Bearer " + $window.sessionStorage.token;
            }
            console.log("config  : " + config.headers.Authorization);
            return config;
        },
        response : function(response) {
            if (response.status == 401) {
                console.log("reponse    httpINterceptor  : " + response.status);
            } else if (response.status == 200) {
                console.log("reponse    httpINterceptor  : " + response.status);
            }

            return response || $q.when(response);
        }
    };
});
