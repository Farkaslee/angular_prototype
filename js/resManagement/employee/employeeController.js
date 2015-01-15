'use strict';
/**
 * New node file
 */

var employeeControllerModule = angular.module("employeeControllerModule", [ 'employeeServiceModule' ]);

employeeControllerModule.controller("employeeController", function($scope, employeeService) {
    $scope.employeelist = [];
    employeeService.getEmployee().then(function(employees) {
        $scope.employeelist = employees.data.content;
    });
});