angular.
  module('schedulingApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/tiles', {
          template: '<tile-grid></tile-grid>'
        }).
        otherwise('/tiles');
    }
  ]);
