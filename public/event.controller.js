var app = angular.module("myApp");

app.controller("EventCtrl", function($scope, $timeout,$location, EventFactory){
  $scope.saveEvent = function(event){
    EventFactory.saveSelectedEvent(event);
    $timeout(function(){$location.path("/map")});
  }


    EventFactory.getAnswers()
        .then(function(data){
          $timeout(function(){$scope.Answers = data});
          console.log(data);
        })
        .catch(function(error){
          $scope.error = "There was an error getting data!";
        });

        $scope.category = EventFactory.getCategory();
        // $scope.reloadPage = function(){window.location.reload.path("/#")};
        
        $scope.hide = true;
        $scope.hidingShowing = function() {
            $scope.hide = $scope.hide === false;
          };
          $scope.hideDescription = true;
          $scope.hidingShowingDescription = function() {
              $scope.hideDescription = $scope.hideDescription === false;}

      });

    