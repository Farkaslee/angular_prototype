'use strict';
/**
 * New node file
 */


var employeeServiceModule = angular.module('employeeServiceModule', []);

employeeServiceModule.service('employeeService', function($http) {
    this.getEmployee = function() {
        return $http.get(restApi + "user").success(function(data) {
            return data;
        });
    };
});
