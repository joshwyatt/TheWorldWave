angular.module('wwa.factories', ['firebase', 'worldWaveApp'])

.factory('waveFactory', function($firebase, fbUrl, $log){
  var waveService = {};

  waveService.makeWave = function(){
    var wavesRef = new Firebase(fbUrl + '/waves');
    var waves = $firebase(wavesRef);
    console.log('in make wave');
    var createdAt = new Date;
    var createdBy = 'ya moms shiver';
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

.factory('userFactory', function($firebase, fbUrl, $log){
  var userService = {};

  userService.createUser = function(newUser){
    var userRef = new Firebase(fbUrl + '/users');
    var auth = new FirebaseSimpleLogin(userRef, function(error, user) {
      if (error) {
        console.log(error);
      } else if (user) {
        console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
      }
    });

    auth.createUser(newUser.email, newUser.password, function(error, user) {
      if (!error) {
        console. log('User Id: ' + user.uid + ', Email: ' + user.email);
        auth.$add({id: user.uid, email: user.email});
      }
      if (error){
        console.log('in error: ' + error);
      }
    });
  }

  userService.loginUser = function(){
      var userRef = new Firebase(fbUrl);
      var auth = new FirebaseSimpleLogin(userRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          console.log(error);
        } else if (user) {
          // user authenticated with Firebase
          console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
        } else {
          // user is logged out
        }
      });
      auth.login('facebook');
  };

  return userService;
})

.factory('statsFactory', function($firebase, fbUrl, $log){
  var statsService = {};
  var waveIdTicker = 0;

  statsService.waves = {};

  statsService.makeWave = function(user){
    var wave = {};
    wave.userQueue = [];

    wave.user = user;
    wave.id = waveIdTicker++;
    wave.userQueue.add(user);
    wave.startedAt = new Date;


    return wave;
  };

  statsService.addWaveToWaves = function(wave){
    statsService.waves[wave.id] = wave;
  };

  return statsService;
});