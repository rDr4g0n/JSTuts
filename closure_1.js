////////////////////
// a simple closure
////////////////////

var z = 10;

function addZ(a, b){
	return a + b + z;
}

addZ(10, 4); //=> 24

/*
{
	__globalEnvironment__: {
		z: 10
	}
	a: 10,
	b: 4
}
*/

// what if z is changed?
z = 20;
addZ(10, 4); //=> 34
// gah! same input, different result! IMPURE!


//////////////////
// harder to test
//////////////////

function infallibleStockMarketFormula(a, b){
	return a + b / z;
}

infallibleStockMarketFormula(21, 199984);

// some magic number changes because magic
z = 0;

infallibleStockMarketFormula(21, 199984); //=> Infinity (wahhh? SELL SELL SELL!)
