"use strict";
// number
var x = 6;
console.log(x);
// x = true;
// boolean, string
var y = false;
var z = 'abc';
// array
var hobbies = ["cooking", "sport"];
// tuples
var myTuples = ['a', 1];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// function
function addNum(a, b) {
    return a + b;
}
var myAddNum = addNum;
// objects
var userData = {
    name: "bob",
    age: 27
};
// any
var t;
// union types
var myValue = 1;
// complex object
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
