var app = angular.module("myApp");
app.factory('EventFactory', function($http){
  var postData;
  var currentCategory;


  return {
    getAnswers: getAnswers,
    saveCategory: saveCategory
  };

  function saveCategory(category){
    currentCategory = category;
  }

  function getAnswers (){
    // if(postData){
    //   return Promise.resolve(postData);
    // }
     console.log('in get answers');
    return $http.get(`api-event?app_key=cMG6K3XWNbCQbjfj&category=${currentCategory}&location=Detroit&date=Future`)
      .then(function(response){
        postData = response.data.events.event;
        return postData;
     });
  }
  });