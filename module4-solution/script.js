
(function(window){

  var HelloSpeaker = {};
  var greeter = "Hello ";

  HelloSpeaker.hello = function(names){
    console.log(greeter + names);
  }


  window.HelloSpeaker = HelloSpeaker ;


})(window);


(function(window){

  var ByeSpeaker = {};
  var greeter = "Bye ";

  ByeSpeaker.bye = function(names){
    console.log(greeter + names);
  }


  window.ByeSpeaker = ByeSpeaker ;


})(window);






(function (){


  var names = ["Yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];

  for(var i = 0 ; i < names.length ; i ++){

    var firstLetter = names[i].charAt(0).toLowerCase();

    if(firstLetter === "j"){
     console.log(ByeSpeaker.bye(names[i]));
      
    }else{
     console.log(HelloSpeaker.hello(names[i]));
     }
  }


})();

