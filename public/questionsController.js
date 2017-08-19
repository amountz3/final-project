(function() {

  var app = angular.module('myApp', []);

  app.controller('myController', function(){
    this.randomizer = questions[Math.floor(Math.random()*questions.length)];
    this.pick = function(){
      this.randomizer = questions[Math.floor(Math.random()*questions.length)];
    };
  });

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

})();
