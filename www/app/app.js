'use strict';

var angular = require('angular');
require('../lib/feedhenry');

angular.module('wfm-mobile', [
  require('angular-ui-router')
, require('angular-animate')
, require('angular-aria')
, require('angular-material')

, require('fh-wfm-mediator')
, require('fh-wfm-workorder')
, require('fh-wfm-workflow')
, require('fh-wfm-appform')
, require('fh-wfm-risk-assessment')
, require('fh-wfm-vehicle-inspection')

, require('./workorder/workorder')
, require('./workflow/workflow')
])

.config(function($stateProvider, $urlRouterProvider) {
  // if none of the states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/workorders');

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'app/main.tpl.html',
      controller: function($scope, $state, $mdSidenav){
        $scope.$state = $state;
        $scope.toggleSidenav = function(menuId) {
          $mdSidenav(menuId).toggle();
        };
        $scope.navigateTo = function(state, params) {
          if (state) {
            $state.go(state, params);
          }
        }
      }
    })
});
