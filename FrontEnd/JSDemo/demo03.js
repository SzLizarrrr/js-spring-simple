// JS Object
var assert = require('assert');

var alice = {
	name: 'Alice',
	age: 20,
	hello: function(){
		return "Hello, " + this.name;
	}
};
var keys = Object.keys(alice);
console.log(keys);
keys.forEach(function(key, index){
	console.log(key); // "name"
	if(typeof alice[key] === "function") {
		console.log(alice[key]()); // alice.key
	}else{
		console.log(alice[key]);
	}
});

// for(var key in alice) {
// 	console.log(alice[key]); // alice["length"]
// }

// Difference between keys and getOwnPropertyNames
var props = Object.getOwnPropertyNames(alice);
console.log(props);

var arr = [1, "a", 3, {"name": "bob"}, 5]; // "0" : 1, "1": 2
// arr.length
console.log("Keys ", Object.keys(arr)); // it returns only enumrable properties.
console.log("getOwnPropertyNames ", Object.getOwnPropertyNames(arr));

// Accessor and Mutator
var bob = {
	_name: "bob",
	get name(){
		return this._name;
	},
	set name(str){
		this._name = str;
	}
}
console.log(bob._name);
bob.name = "Steve";
console.log(bob.name);
console.log(bob._name);