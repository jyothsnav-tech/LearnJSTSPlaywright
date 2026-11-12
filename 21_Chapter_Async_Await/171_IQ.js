//This code demonstrates how JavaScript executes synchronous code and 
// asynchronous code when using async/await.

console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D");

// Visualise the execution
// Execution order
// 1. Print A
//    Executed immediately
// 2. Call test() and print B
//    Executed immediately
// 3. Encounter await
//    Pause async function
//    Schedule the remaining function work as a microtask.
// 4. Print D
//    Executed immediately
//    The main synchronous code continues.
// 5. Print C
//    Microtask executed
//    The async function resumes.

//A, B, and D are synchronous operations.
//C is scheduled to run after the synchronous code finishes.