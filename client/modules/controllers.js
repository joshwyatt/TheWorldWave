angular.module('wwa.controllers', ['wwa.factories', 'firebase', 'worldWaveApp'])

.controller('UserController', function($scope, userFactory, $firebase, $log, fbUrl){

  $scope.createUser = function(user){
    console.log('in submitUser');
    userFactory.createUser(user);
    $scope.newUser = '';
  };

  $scope.users;
  $scope.init = function(){
    $scope.data = $firebase(new Firebase(fbUrl + '/users'));
    $scope.data.$on('loaded', function(){
      console.log('users init() loaded: ' + $scope.data);
      $scope.users = $scope.data;
    });
    $scope.data.$on('change', function(){
      console.log('users init() change: ' + $scope.data);
      $scope.users = $scope.data;
    });
  };

})

.controller('WaveController', function($scope, waveFactory, $firebase, $log, fbUrl){
  $scope.waves;
  $scope.init = function(){
    $scope.data = $firebase(new Firebase(fbUrl + '/waves'));
    console.log($scope.data);
    $scope.data.$on('loaded', function(){
      $scope.waves = $scope.data;
    });
    $scope.data.$on('change', function(){
      $scope.waves = $scope.data;
    });
  };


  $scope.makeWave = function(user){
    $scope.waves = waveFactory.makeWave(user);
  };

})

.controller('SignUpController', function($scope, userFactory, $firebase){
  $scope.createUser = userFactory.createUser;
})

.controller('StatsController', function($scope, $firebase, waveFactory, $log){

})

.controller('TickerController', function($scope, $timeout){
  $scope.highscore = 985643;
  $scope.onTimeout = function(){
      $scope.highscore += 348;
      mytimeout = $timeout($scope.onTimeout,1000);
  }
  var mytimeout = $timeout($scope.onTimeout,1000);
})