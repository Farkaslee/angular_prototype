'use strict';

/*app ui routers*/ 
var appUIRoute = angular.module('appUIRoute', ['ui.router','userController','employeeControllerModule']);
appUIRoute.config(function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home',{
    url:'/home',
    views: {
      '':{
        templateUrl:  viewBase + "content.html",
        controller:function($state){
          $state.go('home');
        }
      },
      'header':{
        templateUrl: viewBase + "header.html"
      },
      'footer':{
        templateUrl: viewBase + "footer.html"
      },
      'modal':{
        templateUrl: viewBase + "login/login.html",
        controller:'loginController'
      }
    }
  })

  .state('controlPanel',{
    url:'/controlPanel',
    views:{
      'header':{
        templateUrl: viewBase + "header.html"
      },
      'footer':{
        templateUrl: viewBase + "footer.html"
      },
      '@':{
         templateUrl:  viewBase + "controlPanel/controlPanelContent.html",
       },
      'modal':{
         templateUrl: viewBase + "search.html"
      }
    }
  })
  .state('resManagement',{
    url:'/resManagement',
    views:{
      'header':{
        templateUrl: viewBase + "header.html"
      },
      '@':{
        templateUrl: viewBase + "resManagement/resManagementContent.html"
      },
       'footer':{
        templateUrl: viewBase + "footer.html"
      }
      
    }

  })

  .state('employee',{
    url:'/employee',
    views:{
       'header':{
         templateUrl: viewBase + "header.html"
      },
       '@':{
        templateUrl: viewBase + "resManagement/employee/employee.html",
        controller:'employeeController'
      },
       'footer':{
        templateUrl: viewBase + "footer.html"
      },
       'modal':{
         templateUrl: viewBase + "search.html"
      }
    }
  })
});

