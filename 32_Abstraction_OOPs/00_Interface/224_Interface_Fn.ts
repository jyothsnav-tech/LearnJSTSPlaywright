// Interfaces with Functions (Methods)
// An interface can also define functions that an object must implement.

interface Calculator{
    add(a:number,b:number):number;
    subtract(a: number, b: number): number;
}

// add(a: number, b: number): number;
// It contains three important parts.
// Code             Meaning
// add              Function name
// a:               number First parameter must be a number
// b:               number Second parameter must be a number
// : number after ) Function must return a number
// "The Calculator object must have a function called add, which accepts two numbers and returns a number."

const calc: Calculator = {
    add: (a,b) => a+b,
    subtract: (a, b) => a - b,
}

calc.add(3,4);