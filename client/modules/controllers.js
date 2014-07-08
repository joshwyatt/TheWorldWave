angular.module('wwa.controllers', ['wwa.factories', 'firebase', 'worldWaveApp'])

.controller('UserController', function($scope, userFactory, $firebase, $log){
  $scope.submitUser = function(user){
    console.log('in submitUser');
    userFactory.makeUser(user);
    $scope.newUser = '';
  };

})

.controller('WaveController', function($scope, waveFactory, $firebase, $log){

  $scope.waveAway = function(){
    alert();
    console.log('here');
  };

})

.controller('SignUpController', function($scope, userFactory, $firebase){
  $scope.createUser = userFactory.createUser;
})

.controller('WaveStatsController', function($scope, $firebase){
})

.controller('ButtonsController', function($scope){

  $scope.radioModel = 'Middle';

});

