angular.module('wwa.factories', ['firebase', 'worldWaveApp'])

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

.factory('waveFactory', function($firebase, fbUrl, $log){
  var waveService = {};
  var waveIdTicker = 0;

  waveService.waves = {};

  waveService.makeWave = function(user){
    var wave = {};
    wave.id = waveIdTicker++;
    wave.startedAt = new Date;
    wave.userQueue = [];

    wave.user = user;
    wave.userQueue.push(user);

    wave.passes = 0;
    wave.score = 0;
    wave.lastPass = wave.startedAt;

    wave.users = wave.userQueue.length;

    var fb = new Firebase(fbUrl + '/waves');
    fb.set({
      id: wave.id,
      startedAt: wave.startedAt,
      user: wave.user,
      passes: wave.passes,
      score: wave.score,
      lastPass: wave.lastPass,
      numberOfUsers: wave.users
    });

    return wave;
  };

  waveService.addWaveToWaves = function(wave){
    waveService.waves[wave.id] = wave;
  };

  waveService.updateWaveScore = function(wave){
    var currentTime = new Date;
    var timeAlive = currentTime - wave.startedAt;
    var timeSinceLastPass = currentTime - wave.lastPass;


    return wave;
  };

  waveService.passWave = function(wave){
    //pass wave to next user in userqueue
    //update passes
    //update score
  }

  return waveService;
});