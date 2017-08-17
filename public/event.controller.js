var app = app.module('myApp');

app.controller('EventCtrl', function($scope, EventFactory){
    
      EventFactory.getPosts()
        .then(function(data){
          $scope.redditPosts = data;
        })
        .catch(function(error){
          $scope.error = 'There was an error getting data!';
        });
    
    
    });
    