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

.factory('userFactory', function($firebase, fbUrl, $log){
  var userService = {};

  userService.createUser = function(newUser){
    var userRef = new Firebase(fbUrl + '/users');
    var auth = new FirebaseSimpleLogin(userRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
      }
    });
    auth.createUser(newUser.email, newUser.password, function(error, user) {
      // console.log('email' + email);
      // console.log('password' + password);
      if (!error) {
        console. log('User Id: ' + user.uid + ', Email: ' + user.email);
        auth.$add({id: user.uid, email: user.email});
        // user.email = email;
        // user.password = password;
        // console.log('inside createUser');
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
});

