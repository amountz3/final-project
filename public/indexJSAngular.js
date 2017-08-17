var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/category1',{
       templateUrl: 'music.html',
       controller: 'musicController',
    })
    .when('/',{
       templateUrl: 'performingArt.html',
       controller: 'performingArtController',
    })

    .when('/',{
       templateUrl: 'sport.html',
       controller: 'sportController',

    })
    .otherwise({
    redirectTo: '/index'
});

$locationProvider.hashPrefix('');

});
