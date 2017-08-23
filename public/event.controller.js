var app = angular.module("myApp");

app.controller('EventCtrl', function($scope, $timeout, EventFactory){
  
    EventFactory.getAnswers()
        .then(function(data){
          $timeout(function(){$scope.Answers = data});
          console.log(data);
        })
        .catch(function(error){
          $scope.error = 'There was an error getting data!';
        });
      $scope.category = EventFactory.getCategory();
    });
    