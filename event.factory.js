var app = app.module('myApp');

app.factory('EventFactory', function($http){
    var postData;
  
    return {
      getPosts: getPosts,
    };
    function getPosts (){
  
      if(postData){
  
        return Promise.resolve(postData);
      }
    
  
      return $http.get('http://api.eventful.com/rest/events/search?app_key=cMG6K3XWNbCQbjfj&keywords=movies&location=Detroit&date=Future')
        .then(function(response){
          postData = response;
          console.log(postData);
       })
    }
    });