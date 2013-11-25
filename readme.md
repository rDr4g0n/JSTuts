Scope
---------------
* js uses function scope, not block scope [scope.js]
* example environment with bound variables [fnEnvironment.js]
* a function that only accesses bound variables is a pure function
	* guaranteed to always produce the same results, given the same input
	* easy to test
	* very portable/reusable
	* ideal utility functions
	* not really reasonable to use entirely pure functions (but its a good goal to strive towards!)
* example environment that uses closure to access parent environment [closure_1.js]
* in javascript, an “impure” function is effectively a closure
	* a closure function can produce different results with the same arguments
	* closure functions can be harder to test
	* closure functions are significantly more flexible
* all functions are closures waiting to happen. just access an unbound var, and you’re in a closure. [closure_2.js, closure_3.js]
* regardless of where a closure function is invoked, the closured environment is automatically bound to the closure functions environment
	* this is how we achieve “private” vars and methods
	* Example passing a function around and still accessing closure scope [closure_4.js]

this
----------------
* unlike a closure environment, which is attached to a function regardless of where it’s invoked, `this` context is determined based on how/where it’s invoked.
	* when creating a new 
		* new doThing();
	* if this is explicitly set via call or apply
		* doThing.call(myObj);
	* if the function is called from an object
		* eg myObj.doThing();
	* otherwise `this` is bound to global (use strict causing it to bind to undefined)
* example of a single function being invoked in all ways, thus getting different this values
* example of using this to compose objects
* use this as an alternative to passing an argument that basically serves as context

put it together
-----------------
* using a mixture of closures, and context binding, we can create clean reusable code in the form of a module
