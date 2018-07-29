// number
let x: number = 6;
console.log(x);

// x = true;

// boolean, string
let y: boolean = false;
let z: string = 'abc';

// array
let hobbies: string[] = ["cooking", "sport"];

// tuples
let myTuples: [string, number] = ['a', 1];

// enum
enum Color {
    Red, //0
    Green, //1
    Blue //2
}
let myColor = Color.Green;
console.log(myColor);

// function
function addNum(a: number, b: number):number{
    return a + b;
}

let myAddNum: (a: number, b: number) => number = addNum;

// objects
let userData: {name: string, age: number} = {
    name: "bob",
    age: 27
};

// any
let t;

// union types
let myValue: number | boolean = 1;

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [1, 2, 3],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

// type alias
type ComplexType = {data: number[], output: (all: boolean) => number[]};