var app = angular.module("myApp");
app.factory('EventFactory', function($http){
  var postData;

  return {
    getAnswers: getAnswers,
  };
  function getAnswers (category){
    category = category;
    if(postData){
      return Promise.resolve(postData);
    }

    return $http.get(`api-event?app_key=cMG6K3XWNbCQbjfj&category=${category}&location=Detroit&date=Future`)
      .then(function(response){
        postData = response.data.events.event;
        console.log(postData);
        return postData;
     })
  }
  });