'use strict';

/**
 * @ngdoc function
 * @name testPolymerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testPolymerApp
 */
angular.module('testPolymerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
