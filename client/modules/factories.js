angular.module('wwa.factories', [])

.factory('waveFactory', function(){

  var waveService = {};
  //storage for waves
  var _waves = {};
  var _waveIdTicker = 0;

  //HELPER METHODS

  //wave making function eventually needs tying to actual database
  waveService.makeWave = function(createdBy){
    var wave = {};
    wave.id = _waveIdTicker++;
    wave.userQueue = [];
    wave.createdAt = new Date;
    wave.createdBy = createdBy || 'ya moms shiver';
    wave.userQueue.push(wave.createdBy);
    _waves[wave.id] = wave;
    return wave;
  };

  waveService.destroyWave = function(waveId){
    delete _waves[waveId];
  }

  return waveService;

})

.factory('userFactory', function(){
  var userService = {};
  var _users = {};
  var _userIdTicker = 0;

  userService.makeUser = function(name){
    var user = {};
    user.wave = {};
    user.id = _userIdTicker++;
    user.createdAt = new Date;
    _users[user.id] = user;
    return user;
  }

  return userService;
})