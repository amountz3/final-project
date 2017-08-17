app.factory('EventFactory', function($http){
  var postData;

  return {
    getPosts: getPosts,
  };
  function getPosts (category){
    category = category || 'sports';
    if(postData){

      return Promise.resolve(postData);
    }
  

    return $http.get(`api-event?app_key=cMG6K3XWNbCQbjfj&category=${category}&location=Detroit&date=Future`)
      .then(function(response){
        postData = response;
        console.log(postData);
     })
  }
  });