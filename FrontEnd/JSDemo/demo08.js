// JS Closure

/*
	JS closure is a function that is defined in another function. 
	The inner function can access all the local variables of the outer function.
	If the inner function is returned, then the local variable of the outer function
	is still alive after the outer funciton is executed.
	Disadvantage: Clousure may cause memory leak.
*/

function outer() {
	var m = 10;
	return function(x) {
		return x * m; // 2 * 10
	}
}
var inner = outer();
console.log(inner(2));

function getCounter() {
	var count = 0;
	function x() {

	}
	return {
		getCount: function() {
			return count;
		},
		setCount: function(c) {
			count = c;
		},
		increase: function() {
			count++;
		},
		xxxx: x
	};
}
var myCounter = getCounter();
console.log(myCounter.getCount());
myCounter.setCount(1);
console.log(myCounter.getCount());

var myCounter1 = (function(){
	var count = 0;
	return {
		getCount: function() {
			return count;
		},
		setCount: function(c) {
			count = c;
		},
		increase: function() {
			count++;
		}
	};
})();

function MyClass() {
	this.x = 100;
	var y = "abc";
	var getX = function() {
		console.log(this.x); // undefined
		console.log(y); // abc
	}
	getX();
	this.getY = function() {
		console.log(this.x); // 100
		console.log(y); // abc
	}
}
var myClass = new MyClass();
myClass.getY();

// Singleton
var MySingle = (function(){
	var instance;
	return {
		getInstance: function() {
			if(!instance) { // {}
				instance = new Object();
			}
			return instance;
		}
	};
})();
var ms1 = MySingle.getInstance();
var ms2 = MySingle.getInstance();
console.log(ms1 === ms2);

var increase = (function(){
	var count = 1;
	return function() {
		return count++;
	};
})();
console.log(increase());
console.log(increase());
console.log(increase());

var myTimeout = setTimeout(function(){
	console.log("after  2 second");
}, 0);
clearTimeout(myTimeout);

console.log("after setTimeout");

// setInterval(function() {
// 	console.log("every 2 seconds");
// }, 2000);

for(var  i = 1; i <=5; i++) {
	// setTimeout((function(index){
	// 	return function() {
	// 		console.log(index);
	// 	}
	// })(i), 0);

	setTimeout(handle(i), 0);
}

function handle(index) {
	// var index = 1;
	return function(){
		console.log(index);
	}
}