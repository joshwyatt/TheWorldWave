angular.module('wwa.controllers', ['wwa.factories', 'firebase', 'worldWaveApp'])

.controller('UserController', function($scope, userFactory, $firebase){
  $scope.submitUser = function(user){
    userFactory.makeUser(user);
    $scope.newUser = '';
  }
  $scope.currentUser = userFactory.currentUser || 'no user yet';
})

.controller('WaveStatsController', function($scope, $firebase){
})

.controller('WaveController', function($scope, waveFactory, $firebase, $log){
  $scope.makeWave = waveFactory.makeWave;
})

.controller('ButtonsController', function($scope){

  $scope.radioModel = 'Middle';

})