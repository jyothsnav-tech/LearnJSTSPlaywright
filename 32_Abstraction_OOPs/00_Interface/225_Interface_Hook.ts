// Function Interfaces (Callable Interfaces)
// An interface can define the structure of a function itself.

interface TestHook{
    (testName:string) : void;
}

// Code                 Meaning
// interface TestHook   Defines a function interface named TestHook
// testName             Parameter name
// : string             The parameter must be a string
// : void               The function does not return a useful value

// The interface is essentially saying: "Any function assigned the type TestHook must accept a string parameter and have a void return type."
// What does void mean? void means we are not expecting the function to return a value.

// TestHook is a function interface, also called a callable interface.

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[BEFORE] Setting up: " + testName);
}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("[AFTER] Tearing down: " + testName);
};

beforeEachHook("Login Test");