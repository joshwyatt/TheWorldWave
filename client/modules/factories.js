angular.module('wwa.factories', ['firebase', 'worldWaveApp'])

.factory('waveFactory', function($firebase, fbUrl){
  var waveService = {};

  var wavesRef = new Firebase(fbUrl + '/waves');
  var waves = $firebase(wavesRef);

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

  userService.currentUser;

  userService.getCurrentUser = function(){
    return userService.currentUser;
  };

  userService.makeUser = function(name){
    var createdAt = new Date;

    user = {
      createdAt: createdAt,
      name: name
    };

    userService.currentUser = user;
    users.$add(user);
  };

  return userService;
});

