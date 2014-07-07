angular.module('wwa.controllers', ['wwa.factories'])

.controller('UserController', function($scope){
  $scope.user = {
    username: 'josh'
  }
})

.controller('WaveStatsController', function($scope){
})

.controller('WaveController', function($scope, waveFactory, $log){
  $scope.waves = {};
});