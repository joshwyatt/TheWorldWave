angular.module('wwa.controllers', ['wwa.factories', 'firebase', 'worldWaveApp'])

.controller('UserController', function($scope, userFactory, $firebase, fireFactory, fbUrl){
  $scope.name = 'josh';
  $scope.msg = 'I want to figure this out and get coffee';
  var ref = new Firebase(FBURL + '/users');
  $scope.fireUsers = $firebase(ref);
  var addadd = function(){
    $scope.messages.$add({from: $scope.name, body: $scope.msg});
  };
  $scope.fireUsers.$add({from: $scope.name, body: $scope.msg});
})

.controller('WaveStatsController', function($scope, $firebase){
})

.controller('WaveController', function($scope, waveFactory, $firebase){
  $scope.wave = waveFactory.makeWave();
});