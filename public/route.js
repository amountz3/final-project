var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'index.html',
     })
    .when('/questions',{
       templateUrl: 'questions.html',
       controller: 'myController'
    })
    .when('/category',{
        templateUrl: 'category.html',
        controller: 'EventCtrl'
     })
    .otherwise({
    redirectTo: '/'
});

$locationProvider.hashPrefix('');

});
