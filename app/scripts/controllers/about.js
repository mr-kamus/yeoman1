'use strict';

/**
 * @ngdoc function
 * @name yeomanWebappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanWebappApp
 */
angular.module('yeomanWebappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
