var app = angular.module('worldWaveApp', ['ui.router', 'wwa.controllers', 'angularMoment', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('signup', {
            url: '/signup',
            templateUrl: 'partials/signUp.html'
        })
        .state('wave', {
          url: '/wave',
          templateUrl: 'partials/wave.html'
        })
        .state('stats', {
          url: '/stats',
          templateUrl: 'partials/stats.html'
        })
        .state('highscore', {
          url: '/highscore',
          templateUrl: 'partials/highscore.html'
        })
        .state('users', {
          url: '/users',
          templateUrl: 'partials/users.html'
        })

    $urlRouterProvider.otherwise('/signUp');
})

.run(function($rootScope){
  // Add any functionality that needs to run prior to the rest of the app.
})

.constant('fbUrl', 'https://amber-fire-3283.firebaseio.com/')