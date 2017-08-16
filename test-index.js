var  questions = [
  {category: "performingArts", question: "Chaga is one of the weirdest mushrooms you may ever see."},
  {category: "performingArts", question: "We all know interspecies romance is weird."},
  {category: "performingArts", question: "Im glad apples don't scream when you bite into them."},
  {category: "performingArts", question: "A Freudian slip is when you say one thing but mean your mother."},
  {category: "performingArts", question: "Some mornings, it's just not worth chewing through the leather straps"},
  {category: "performingArts", question: "Life may have no meaning. Or even worse, it may have a meaning of which I disapprove."},
  {category: "sports", question: "Chaga is one of the weirdest mushrooms you may ever see."},
  {category: "sports", question: "We all know interspecies romance is weird."},
  {category: "sports", question: "Im glad apples don't scream when you bite into them."},
  {category: "sports", question: "A Freudian slip is when you say one thing but mean your mother."},
  {category: "sports", question: "Some mornings, it's just not worth chewing through the leather straps"},
  {category: "sports", question: "Life may have no meaning. Or even worse, it may have a meaning of which I disapprove."},
  {category: "music", question: "Chaga is one of the weirdest mushrooms you may ever see."},
  {category: "music", question: "We all know interspecies romance is weird."},
  {category: "music", question: "Im glad apples don't scream when you bite into them."},
  {category: "music", question: "A Freudian slip is when you say one thing but mean your mother."},
  {category: "music", question: "Some mornings, it's just not worth chewing through the leather straps"},
  {category: "music", question: "Life may have no meaning. Or even worse, it may have a meaning of which I disapprove."}
];

function questionRandomizer() {
var randomNumber = Math.floor(Math.random() * questions.length);
document.getElementById("question").innerHTML = questions[randomNumber].question
}

var app = angular.module("myApp", []);

app.controller('EventCtrl', function($scope, EventFactory){

  RedditFactory.getPosts()
    .then(function(data){
      $scope.redditPosts = data;
    })
    .catch(function(error){
      $scope.error = 'There was an error getting data!';
    });


});

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

  

    


