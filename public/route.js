var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/questions',{
       templateUrl: 'questionsController.html',
       controller: 'myController'
    })
    .otherwise({
    redirectTo: 'questions'
});

$locationProvider.hashPrefix('');

});
