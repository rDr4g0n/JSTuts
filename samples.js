function add(a, b){
	return a + b;
}

var z = 10;

function addZ(a, b){
	return a + b + z;
}


var Federation = {
	post: function(uri, pass, data, callback){
		// fake authentication
		if(pass !== "OhuraOhYes"){
			throw "Invalid Password";
		}

		// pretend to do work
		setTimeout(function(){
			callback( Math.round(Math.random()*100) );
		}, Math.random()*5000);
	}
};

function postLog(username, pass, logTxt){

	var uri = "log/" + username;

	var onComplete = function(id){
		console.log(
			"log for", username,
			"was successfully posted to", uri,
			"with id", id);
	};

	Federation.post(uri, pass, logTxt, onComplete);

	console.log("postLog execution complete.");

}

function bindCredentials(type, username, pass){

	var uri = type +"/"+ username;

	return function(logTxt){
		Federation.post(uri, pass, logTxt, function(id){
			console.log("log for", username,
				"was successfully posted to", uri,
				"with id", id);
		});
		console.log("credential bound function execution complete");
	};
}


var ninjaFunction;

function kirksSecret(){

	var secret = "Be William Shatner.";

	ninjaFunction = function(){
		return secret;
	};

}


function WhatIsThis(property1){
	this.property1 = property1;
	console.log(this);
}

var whatAboutThis = {
	property1: "not it!"
};

var letsTryThis = {
	property1: "nothing to see here",
	WhatIsThis: WhatIsThis
};