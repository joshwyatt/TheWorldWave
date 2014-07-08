angular.module('wwa.controllers', ['wwa.factories', 'firebase', 'worldWaveApp'])

.controller('UserController', function($scope, userFactory, $firebase, $log){
  $scope.submitUser = function(user){
    console.log('in submitUser');
    userFactory.makeUser(user);
    $scope.newUser = '';
  };
})

.controller('WaveController', function($scope, waveFactory, $firebase, $log){
  $scope.wave = 'no wave yet';
  $scope.heyo = 'something';

  $scope.makeWave = function(){
    $scope.wave = waveFactory.makeWave();
  }

})

.controller('SignUpController', function($scope, userFactory, $firebase){
  $scope.createUser = userFactory.createUser;
})

.controller('StatsController', function($scope, $firebase, waveFactory){

});