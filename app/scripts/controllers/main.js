'use strict';

/**
 * @ngdoc function
 * @name testPolymerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testPolymerApp
 */
angular.module('testPolymerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
