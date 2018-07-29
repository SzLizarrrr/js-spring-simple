"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// let and const
var variable = "test";
var maxLevels = 100;
// maxLevels = 200;
console.log(maxLevels);
// block scope
for (var variable_1 = 1; variable_1 < 10; variable_1++) {
}
console.log(variable);
// arrow function. keep 'this' binding.
var addNumers = function (n1, n2) { return n1 + n2; };
// default parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('done!');
};
countdown();
// Rest and Spread operators.
var numArr = [1, 10, 99, -5]; // Math.max.apply(null, numArr)
console.log(Math.max.apply(Math, numArr));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    //arguments.
    console.log(args);
}
console.log(makeArray('a', 1, 2, 3, 100));
// Destructing
var myHobbies = ["cooking", "sport"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
var myUserData = {
    myUsername: 'Bob',
    myUserAge: 22
};
var anotherName = myUserData.myUsername, myUserAge = myUserData.myUserAge;
// template literal. back-tick
var name = 'Alice';
var greet = "Hello, " + name;
console.log(greet);
// optional parameters
function getFullName(firstName, lastName) {
    return firstName + lastName;
}
var fullName = getFullName("bob");
