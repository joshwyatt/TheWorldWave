angular.module('wwa.controllers', [])

.controller('UserController', function($scope){
  $scope.user = {
    username: 'josh'
  }
})

.controller('WaveStatsController', function($scope){
  $scope.currentWave = {
    size: 10,
    length: 15
  }
})

.controller('WaveController', function($scope){

});