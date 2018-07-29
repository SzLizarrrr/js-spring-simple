// JS Basic

// CommonJS module. (AMD, ES6 module)
var assert = require("assert");
assert.ok(true);
// assert.equal(1, 2);

// false values: false, undefined, 0, null, '', NaN
assert.ok(!false);
assert.ok(!undefined); // var x;
assert.ok(!0);
assert.ok(!null);
assert.ok(!''); // '', "", `abc`(ES6, back-tic, template string)
assert.ok(!NaN); // "a" / "b"
assert.ok(!(NaN == NaN));
// a == NaN
assert.ok(isNaN(NaN));

// Local variable and Global variable.
// nodejs: global object is "global"
// browser: "window"
console.log(global);
function localTest() {
	var a = 1; // local
	b = 2; // global.b
	console.log(a);
}
var globalTest = function() {

};
localTest();
globalTest();
console.log("global b: " + global.b);

// Self invoke function. (IIFE). Module pattern.
(function(){
	console.log("Hello from IIFE!");
})();

// About functions
function avg() { // arguments. array-like object
	console.log(arguments);
	var result = 0;
	for(var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result / arguments.length;
}
console.log(avg(2, 4, 6)); // 2 + "4" + 6

// anonymous recursive function
var factorial = function(n) {
	if(n == 0) {
		return 1;
	} else {
		return n * arguments.callee(n-1);
	}
}

// Hoisting Feature.
(function(){
	// var i;
	//var hello1;
	hello();
	hello1();
	console.log(i);
	console.log(j);
	for(var i = 0; i < 5; i++) {

	}
	console.log(i);
	var j;

	function hello(){
		console.log("hello");
	}
	var hello1 = function() {
		console.log("hello1")
	}
})();

// Difference between == and ===
var s1 = "abc"; //string literal
var s2 = new String("abc");
assert.ok(s1 == s2); // compare value
assert.ok(!(s1 === s2)); // compare value and type.

var x1 = {name: 'Bob'}; // Object Literal
var x2 = {name: 'Bob'};
assert.ok(!(x1 == x2));
assert.ok(!(x1 === x2));
console.log(x1.name); // dot notation
console.log(x1["name"]);// bracket notation
var x = {"first name": "Bob"};
console.log(x["first name"]); // (x.first name)