'use strict';

/**
 * @ngdoc function
 * @name yeomanWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanWebappApp
 */
angular.module('yeomanWebappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
