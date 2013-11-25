//////////////////////////////////////////
// js uses function scope, not block scope
//////////////////////////////////////////

// block scope fail
var meaningOfLife = "try and be nice to people, avoid eating fat, read a good book every now and then, get some walking in, and try and live together in peace and harmony with people of all creeds and nations";

do {
	var meaningOfLife = 42;
} while (true === false);

console.log(meaningOfLife); // => 42


// function scope example
function iKnowASecret(){
	var aSecret = "tom knows kungfu";
}

console.log(aSecret); // => ReferenceError



///////////////////////
// function environment
//////////////////////

function add(a, b){
	return a + b;
}

add(10, 4);

// this function's environment could be represented
// something like this:
{
	a: 10,
	b: 4
}


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

// postLog's environment looks something like
__postLogEnvironment__: {
	username: "jkirk",
	pass: "OhuraOhYes",
	logTxt: "Captain's Log, Stardate 1329.8. The USS Enterprise in pursuit of an unidentified vessel.",
	uri: "log/jkirk"
}

// the anonymous callback function's environment:
__anonymousFunctionEnvironment__: {
	__closured__postLogEnvironment__: {
		username: "jkirk",
		pass: "OhuraOhYes",
		logTxt: "Captain's Log, Stardate 1329.8. The USS Enterprise in pursuit of an unidentified vessel.",
		uri: "log/jkirk"
	}
	id: "12345678"
}


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

// bindCredentials's environment looks something like
__bindCredentialsEnvironment__: {
	type: "log",
	username: "jkirk",
	pass: "OhuraOhYes",	
	uri: "log/jkirk"
}

// the captainsLog function's environment:
__captainsLog__: {
	__bindCredentialsEnvironment__: {
		type: "log",
		username: "jkirk",
		pass: "OhuraOhYes",	
		uri: "log/jkirk"
	}
	logTxt: "Captain's log, stardate 9522.6: I've never trusted Klingons, and I never will."
}

// the Federation.post environment:
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


/////////////////////////////////////////////////////////////////////
// closure environment persists, no matter how the function is called
/////////////////////////////////////////////////////////////////////

// works as demonstrated above
captainsLog("Captain's log, additional entry. Since our mission was routine, we had beamed down to the planet without suspicion.");

var captainUtils = {
	mockSpock: mockSpock,
	pickUpAlienLadies: pickUpAlienLadies,
	hitOnOhura: hitOnOhura
};
captainUtils.captainsLog = captainsLog;

// works because it access the same closure environment
captainUtils.captainsLog("Captain's log, Stardate 1513.1. Our position, orbiting planet M-113.");

// works as well!
captainsLog.call(null, "Captain's log, Stardate 1513.4. One crewman, member of the landing party, dead by violence.");
