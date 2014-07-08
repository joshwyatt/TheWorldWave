angular.module('wwa.controllers', ['wwa.factories', 'firebase', 'worldWaveApp'])

.controller('UserController', function($scope, userFactory, $firebase, $log){
  $scope.createUser = function(user){
    console.log('in submitUser');
    userFactory.createUser(user);
    $scope.newUser = '';
  };
})

.controller('WaveController', function($scope, waveFactory, $firebase, $log, fbUrl){
  $scope.waves;
  $scope.init = function() {


    $scope.data = $firebase(new Firebase(fbUrl + '/waves'));

    $scope.data.$on('loaded', function(){
      console.log($scope.data);
      console.log('inside loaded');
      $scope.waves = $scope.data;
    });
    $scope.data.$on('change', function(){
      console.log('inside change');
      $scope.waves = $scope.data;
    });
  }


  $scope.makeWave = function(user){
    $scope.waves = waveFactory.makeWave(user);
  }

})

.controller('SignUpController', function($scope, userFactory, $firebase){
  $scope.createUser = userFactory.createUser;
})

.controller('StatsController', function($scope, $firebase, waveFactory){

});