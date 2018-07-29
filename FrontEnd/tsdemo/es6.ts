export default {};

// let and const
let variable: any = "test";

const maxLevels = 100;
// maxLevels = 200;
console.log(maxLevels);

// block scope
for(let variable = 1; variable < 10; variable++) {

}
console.log(variable);

// arrow function. keep 'this' binding.
const addNumers = (n1: number, n2: number) => n1 + n2;

// default parameters
const countdown = (start: number = 10): void => {
    while(start > 0) {
        start--;
    }
    console.log('done!');
};
countdown();

// Rest and Spread operators.
const numArr = [1, 10, 99, -5]; // Math.max.apply(null, numArr)
console.log(Math.max(...numArr));

function makeArray(name: string, ...args: number[]){
    //arguments.
    console.log(args);
}
console.log(makeArray('a', 1, 2, 3, 100));

// Destructing
const myHobbies = ["cooking", "sport"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies;

const myUserData = {
    myUsername: 'Bob',
    myUserAge: 22
};
const {myUsername: anotherName, myUserAge} = myUserData;

// template literal. back-tick
const name = 'Alice';
const greet = `Hello, ${name}`;
console.log(greet);

// optional parameters
function getFullName(firstName: string, lastName?: string) {
    return firstName + lastName;
}
const fullName = getFullName("bob");