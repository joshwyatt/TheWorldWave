angular.module('wwa.controllers', ['wwa.factories'])

.controller('UserController', function($scope, userFactory){
  $scope.user = userFactory.makeUser();
})

.controller('WaveStatsController', function($scope){
})

.controller('WaveController', function($scope, waveFactory){
  $scope.wave = waveFactory.makeWave();
});