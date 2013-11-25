///////////////////////////
// clever closure function
///////////////////////////

function bindCredentials(type, username, pass){

	var uri = type +"/"+ username;

	return function(logTxt){
		Federation.post(uri, pass, logTxt, function(id){
			console.log("log for", username, "was successfully posted to", uri, "with id", id);
		});
		console.log("credential bound function execution complete");
	};
}

var captainsLog = bindCredentials("log", "jkirk", "OhuraOhYes");
// much cleaner interface and username and pass are inaccessible now
captainsLog("Captain's log, stardate 9522.6: I've never trusted Klingons, and I never will.");
just 
/*
__bindCredentialsEnvironment__: {
	type: "log",
	username: "jkirk",
	pass: "OhuraOhYes",	
	uri: "log/jkirk"
}

__captainsLog__: {
	__bindCredentialsEnvironment__: {
		type: "log",
		username: "jkirk",
		pass: "OhuraOhYes",	
		uri: "log/jkirk"
	}
	logTxt: "Captain's log, stardate 9522.6: I've never trusted Klingons, and I never will."
}

__postEnvironment__: {
	__captainsLog__: {
		__bindCredentialsEnvironment__: {
			type: "log",
			username: "jkirk",
			pass: "OhuraOhYes",	
			uri: "log/jkirk"
		}
		logTxt: "Captain's log, stardate 9522.6: I've never trusted Klingons, and I never will."
	}
	id: "..."
}
*/