angular.module('wwa.controllers', ['wwa.factories', 'firebase', 'worldWaveApp'])

.controller('UserController', function($scope, userFactory, $firebase, $log){
  $scope.createUser = function(user){
    console.log('in submitUser');
    userFactory.createUser(user);
    $scope.newUser = '';
  };
})

.controller('WaveController', function($scope, waveFactory, $firebase, $log){
  $scope.wave = 'no wave yet';

  $scope.makeWave = function(user){
    $scope.wave = waveFactory.makeWave(user);
  }

})

.controller('SignUpController', function($scope, userFactory, $firebase){
  $scope.createUser = userFactory.createUser;
})

.controller('StatsController', function($scope, $firebase, waveFactory){

});