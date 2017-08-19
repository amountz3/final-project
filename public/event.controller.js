var app = angular.module("myApp", []);

app.controller('EventCtrl', function($scope, EventFactory){
    
      EventFactory.getAnswers()
        .then(function(data){
          $scope.Answers = data;
        })
        .catch(function(error){
          $scope.error = 'There was an error getting data!';
        });
    
    
    });
    