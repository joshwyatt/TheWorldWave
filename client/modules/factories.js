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

  //add wave to waves
  //get wave by id
  //get wave by other properties
  //delete waves

});