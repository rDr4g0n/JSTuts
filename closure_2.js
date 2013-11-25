////////////////////
// closure functions
////////////////////

function postLog(username, pass, logTxt){

	var uri = "log/" + username;
	// Federation.post(type, username, password, content, callback);
	// post() handles connecting to the Federation REST server
	Federation.post(uri, pass, logTxt, function(id){
		console.log("log for", username, "was successfully posted to", uri, "with id", id);
	});

	console.log("postLog execution complete.");

}

// not the nicest interface :/
postLog("jkirk", "OhuraOhYes", "Captain's Log, Stardate 1329.8. The USS Enterprise in pursuit of an unidentified vessel.");

/*
__postLogEnvironment__: {
	username: "jkirk",
	pass: "OhuraOhYes",
	logTxt: "Captain's Log, Stardate 1329.8. The USS Enterprise in pursuit of an unidentified vessel.",
	uri: "log/jkirk"
}

__anonymousFunctionEnvironment__: {
	__closured__postLogEnvironment__: {
		username: "jkirk",
		pass: "OhuraOhYes",
		logTxt: "Captain's Log, Stardate 1329.8. The USS Enterprise in pursuit of an unidentified vessel.",
		uri: "log/jkirk"
	}
	id: "12345678"
}
*/