var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',{
       templateUrl: 'questions.html',
       controller: 'QuestionCtrl'
     })

    .when('/questions',{
       templateUrl: 'questions.html',
       controller: 'QuestionCtrl'
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
