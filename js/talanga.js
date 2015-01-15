'use strict';

var viewBase = 'partials/'
/* app module*/
var talangaApp = angular.module('talangaApp', ['appUIRoute','httpInterceptor','datatables']);
talangaApp.config(function ($httpProvider) {
   $httpProvider.interceptors.push('httpInterceptorFactory');
})

