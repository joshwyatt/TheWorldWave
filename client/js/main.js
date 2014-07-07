var app = angular.module('worldWaveApp', [])

.run(function($rootScope){
  // Add any functionality that needs to run prior to the rest of the app.
})

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

});