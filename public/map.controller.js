var app = angular.module("myApp");

app.controller("MapCtrl", function($scope, $timeout, EventFactory){
  EventFactory.getAnswers()
  .then(function(data){
    $timeout(function(){$scope.Answers = data});
    console.log(data);
  })
  .catch(function(error){
    $scope.error = 'There was an error getting data!';
  });

  EventFactory.getSelectedEvents()
    .then(function(selectedEvent){
      $timeout(function(){
        $scope.event = EventFactory.selectedEvent;   
      });
    })
    .catch(function(error){
      $scope.error = 'There was an error getting data!';
    });
});