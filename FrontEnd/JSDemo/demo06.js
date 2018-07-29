// JS prototype

function A() {
	this.value = 10;
	this.getValue = function() {
		return this.value;
	};
}
var a1 = new A();
var a2 = new A();
console.log(a1.getValue() == a2.getValue());
console.log(a1.getValue() === a2.getValue());
console.log(a1.getValue == a2.getValue);

function B() {
	this.value = 20;
}
B.prototype.getValue = function() {
	return this.value;
};
B.prototype.x = 20;
var b1 = new B(); // b1.getValue.  b1.__proto__ = B.prototype;
var b2 = new B();
console.log(b1.getValue == b2.getValue);
b1.x = 30;
console.log(b1.x); // 30
console.log(b2.x); // 20
// __proto__, prototype

// B.prototype = new Object();
// B.prototype.__proto__ = Object.prototype;


// prototype chain: b1 -> B.prototype(Object) -> Object.prototype -> null
console.log(Object.getPrototypeOf(b1) === B.prototype);
console.log(Object.getPrototypeOf(B.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

// var B = new Function() { .... }
// prototype chain: B -> Function.prototype -> Object.prototype -> null
console.log(Object.getPrototypeOf(B) === Function.prototype);

// new String()
String.prototype.reverse = function() {
	return this.split('').reverse().join('');
};
console.log("abc".reverse()); // "cba"

// Inheritance
// var Parent = new Function();
// Parent.prototype = new Object();
// Parent.prototype.consturctor = Parent;
function Parent() {
	this.name = "Parent";
}
Parent.prototype.sayHello = function() {
	return "Hello, " + this.name;
};

function Child() {

}

// p -> Parent.prototype -> Object.prototype -> null
var p = new Parent();
Child.prototype = p;
// c -> Child.prototype = p -> Parent.prototype -> Object.prototype -> null
var c = new Child();
console.log(c.name);
console.log(c.sayHello());

// new way to do inheritance
function Base() {
	this.name = "Base"; // 3. {}.name = "Base";
}
Base.prototype.value = 100;
function Sub() {
	Base.call(this); // 2. Base();
	// 4.  return { name: "Base" }
}
Sub.prototype = Object.create(Base.prototype); // {}.__proto__ = Base.prototype;
Sub.prototype.constructor = Sub;

// sub(__proto__) -> Sub.prototype = {} -> Base.prototype
var sub = new Sub();  // 1. {}
console.log(sub.name);
console.log(sub.value);
var sub1 = new Sub();

console.log(Base.prototype.isPrototypeOf(sub));
console.log(sub instanceof Base);
console.log(sub instanceof Sub);