// JS Object property attributes and object status.

// A property has 3 attributes: enumerable, writable, configurable.
var alice = {
	"name": "Alice"
};
alice.age = 30; // all 3 attributes are true
console.log(Object.keys(alice));
alice.age = 40;

Object.defineProperty(alice, "salary", {
	value: 1000 // all 3 attributes are false
});
console.log(Object.keys(alice));
alice.salary = 2000;
console.log(alice.salary);

Object.defineProperty(alice, "address", {
	value: "Princeton",
	enumerable: true
});
console.log(Object.keys(alice));
delete alice.address;
delete alice.age;
console.log(Object.keys(alice));

Object.defineProperty(alice, "color", {
	configurable: true
});
alice.color = 100;
console.log(alice.color);
Object.defineProperty(alice, "color", {
	writable: true
});
alice.color = 100;
console.log(alice.color);

// Three status of an object: extensible, sealed, frozen
var obj = {
	x: "abc"
};
console.log('extensible: ', Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log('extensible: ', Object.isExtensible(obj));
obj.y = 100;
console.log(obj.y);

// object is sealed means we can't delete(add) its property
console.log('sealed', Object.isSealed(obj)); // false
Object.seal(obj);
console.log('sealed', Object.isSealed(obj));
delete obj.x;
console.log(obj);

// object is frozen means we can't update(add/delete) its property
console.log('frozen', Object.isFrozen(obj)); //false
Object.freeze(obj);
console.log('frozen', Object.isFrozen(obj));
obj.x = "def";
delete obj.x;
console.log(obj);

// Note: all primitive types are frozen.
var s = "abc";
console.log('frozen', Object.isFrozen(s));