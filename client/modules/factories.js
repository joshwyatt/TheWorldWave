angular.module('wwa.factories', [])

.factory('waveFactory', function(){

  var waveService = {};
  //storage for waves
  var _waves = {};
  var _waveIdTicker = 0;

  //HELPER METHODS

  //wave making function
  waveService.makeWave = function(){
    var wave = {};
    wave.id = _waveIdTicker++;
    wave.createdAt = new Date;
    return wave;
    //time created
    //
  };

  return waveService;

  //add wave to waves
  //get wave by id
  //get wave by other properties
  //delete waves

});