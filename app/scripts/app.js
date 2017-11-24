'use strict';

/**
 * @ngdoc overview
 * @name quitandaApp
 * @description
 * # quitandaApp
 *
 * Main module of the application.
 */
angular
  .module('quitandaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/produtos', {
        templateUrl: 'views/produtos.html',
        controller: 'produtos_controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
