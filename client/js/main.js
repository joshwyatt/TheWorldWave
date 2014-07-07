var app = angular.module('worldWaveApp', ['ui.router', 'wwa.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.otherwise('/user');
    $stateProvider
        .state('user', {
            url: '/user',
            templateUrl: 'partials/user.html'
        })
        .state('wave', {
          url: '/wave',
          templateUrl: 'partials/wave.html'
        })
        .state('waveStats', {
          url: '/waveStats',
          templateUrl: 'partials/waveStats.html'
        });
})

.run(function($rootScope){
  // Add any functionality that needs to run prior to the rest of the app.
});