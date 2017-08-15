var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/category1',{
       templateUrl: 'category1.html',
       controller: 'category1Controller',
    })
    .when('/palindrome',{
       templateUrl: 'category2.html',
       controller: 'category2Controller',
    })

    .when('/prime',{
       templateUrl: 'category3.html',
       controller: 'category3Controller',

    })
    .otherwise({
    redirectTo: '/category1'
});

$locationProvider.hashPrefix('');

});
