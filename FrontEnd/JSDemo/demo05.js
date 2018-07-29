// JS: this

// constructor function.
function Vehicle() {
	this.price = 1000; // global.price = 1000;
}
var v = new Vehicle(); // { price: 1000 }
console.log(v);
console.log('after new ', global.price);
var u = Vehicle();
console.log(u);
console.log('after function invoke', global.price);

// safe constructor.
function Person(name) {
	if(!(this instanceof Person)){
		return new Person(name);
	}
	this.name = name;
}
console.log(Person('bob'));

var bob = {
	name: "Bob",
	hello: function(a,b) {
		return "Hello " + this.name;
	}
};
console.log(bob.hello());
var myHello = bob.hello;
console.log(myHello(1, 2));
//Function: apply, call, bind
console.log(myHello.apply(bob, [1, 2])); // second param: arguments array
console.log(myHello.call(bob, 1, 2)); // second parma: comma delimited arguments 
console.log(myHello.bind(bob)(1 ,2));

(function(){

var order = {
	price: 100,
	calculate: function() {
		//console.log(this.price);
		var that = this;
		return {
			name: "table",
			getTotalPrice: function(qty) {
				return qty * that.price; // that -> order
			}
		};
	},
	calculate2: function() {
		return {
			name: "table",
			getTotalPrice: function(qty) {
				return qty * this.price;
			}
		};
	}
};
var calc = order.calculate();
console.log(calc);
console.log(calc.name);
console.log(calc.getTotalPrice(1));// NaN
var calc2 = order.calculate2();
console.log(calc2.getTotalPrice.call(order, 1));
console.log(calc2.getTotalPrice.apply(order, [1]));
console.log(calc2.getTotalPrice.bind(order)(1));
	
})();

function checkout(price, qty, member) {
	var result = price * qty;
	switch (member) {
		case "VIP":
			result *= 0.7;
			break;
		case "Premium":
			result *= 0.6;
			break;
		default:
			break;
	}
	return result;
}
console.log(checkout(100, 5, "VIP"));
console.log(checkout(100, 5, "Premium"));
console.log(checkout(100, 5, "Regular"));

// open-close principal: open for extension, close for modification.
function checkout2(price, qty, type) {
	// type = "VIP";
	// this[type] ---> this["VIP"] ---> member["VIP"]
	// typeof this[type] === "undefined" ? 1 : this[type]
	this[type] = this[type] || 1;
	return price * qty * this[type]; // this["VIP"]
}
var member = {
	"VIP": 0.7,
	"Premium": 0.8,
	"Super VIp": 0.5
};
console.log(checkout2.call(member, 100, 5, "VIP"));
console.log(checkout2.call(member, 100, 5));