// JS prototype(continued)

// inheritance between objects.
var a = {
	x: 100
};
var b = {};
b.__proto__ = a;
console.log(b.x);

// check if a is on the prototype chain of b
console.log(a.isPrototypeOf(b));

// exmaple.
function Shape() {
	this.x = 0;
	this.y = 0;
}

Shape.moveStatic = function(x, y) {
	this.x = x;
	this.y = y;
};

Shape.prototype.move = function(x, y) {
	this.x = x;
	this.y = y;
};

var s = new Shape();
s.move(1, 2);
s.moveStatic(1, 2); // Shape.moveStatic(1, 2);

function Triangle() {
	Shape.call(this);
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

var t = new Triangle();
t.move(1, 1,);
t.moveStatic(1, 1);

function Point() {}
Point.prototype.move = function(x, y) {
	Shape.prototype.move.call(this, x, y);
}
var p = new Point();
p.move(1, 1);
console.log(p);