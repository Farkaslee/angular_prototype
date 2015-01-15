'use strict';

/* content Module */

angular.module("contentModule", []).config(function($compileProvider) {
    $compileProvider.directive('left', function($compile) {
        return {
            templateUrl : viewBase + 'common/left.html',
            replace : false,
            transclude : true,
            restrict : 'A',
            scope : false
        };
    });

    $compileProvider.directive('center', function($compile) {
        return {
            templateUrl : viewBase + 'common/center.html',
            replace : false,
            transclude : true,
            restrict : 'A',
            scope : false
        };
    });

    $compileProvider.directive('right', function($compile) {
        return {
            templateUrl : viewBase + 'common/right.html',
            replace : false,
            transclude : true,
            restrict : 'A',
            scope : false
        };
    });
});