angular.module('wwa.factories', ['firebase', 'worldWaveApp'])

.factory('waveFactory', function($firebase, fbUrl){
  var waveService = {};

  var wavesRef = new Firebase(fbUrl + '/waves');
  var waves = $firebase(wavesRef);

  //storage for waves
  // var _waves = {};
  // var _waveIdTicker = 0;

  //HELPER METHODS

  //wave making function eventually needs tying to actual database
  waveService.makeWave = function(createdBy){
    var createdAt = new Date;
    var createdBy = createdBy || 'ya moms shiver';
    waves.$add({
      createdAt: createdAt,
      createdBy: createdBy
    });
  };

  waveService.destroyWave = function(waveId){
    //needs to be rebuild for firebase
  };

  return waveService;

})

.factory('userFactory', function($firebase, fbUrl){
  var userService = {};

  var usersRef = new Firebase(fbUrl + '/users');
  var users = $firebase(usersRef);

  userService.makeUser = function(name){
    var createdAt = new Date;

    users.$add({
      createdAt: createdAt,
      name: name
    });
  };

  return userService;
});

