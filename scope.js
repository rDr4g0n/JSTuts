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