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
