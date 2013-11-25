///////////////////////
// function environment
///////////////////////

function add(a, b){
	return a + b;
}

add(10, 4); //=> 14


/*
this function's environment could be represented
something like this: 
{
	a: 10,
	b: 4
}
*/

// all variables are bound, so that's a pure function.

// what about this? what does it's environment look like?
function addZ(a, b){
	return a + b + z;
}

add(10, 4); //=> ????

/*
{
	a: 10,
	b: 4
	z: __????__
}
*/