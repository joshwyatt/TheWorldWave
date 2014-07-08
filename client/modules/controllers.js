angular.module('wwa.controllers', ['wwa.factories', 'firebase', 'worldWaveApp'])

.controller('UserController', function($scope, userFactory, $firebase){
  $scope.makeUser = userFactory.makeUser;
})

.controller('WaveStatsController', function($scope, $firebase){
})

.controller('WaveController', function($scope, waveFactory, $firebase){
  $scope.makeWave = waveFactory.makeWave;
});