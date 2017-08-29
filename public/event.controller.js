var app = angular.module("myApp");

app.controller("EventCtrl", function($scope, $timeout,$location, EventFactory){
  $scope.imageUrls = {
    'Sports': 'https://i.pinimg.com/736x/44/46/3b/44463b544e942d12f396329774e15e0e--detroit-baseball-detroit-michigan.jpg',
    'Performing Arts': 'http://sponsorship.michiganradio.org/wp-content/uploads/2015/04/Fox-Theatre-1.jpg',
    'Music': 'http://sponsorship.michiganradio.org/wp-content/uploads/2015/04/Fox-Theatre-1.jpg'
  };
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

    $scope.category = EventFactory.getCategory()
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str){ return str.toUpperCase(); });

    // $scope.reloadPage = function(){window.location.reload.path("/#")};
        
  $scope.hide = true;
  $scope.hidingShowing = function() {
    $scope.hide = $scope.hide === false;
    };
  $scope.hideDescription = true;
  $scope.hidingShowingDescription = function() {
  $scope.hideDescription = $scope.hideDescription === false;}
});

    