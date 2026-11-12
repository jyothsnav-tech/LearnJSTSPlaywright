// An async function always returns a promise.
// await reads the resolved value inside another async function.


function apiRequest() {
    return new Promise(function (resolve) {
        resolve({ status: 200 });
    });
}


async function runAPIRequest() {
    let response = await apiRequest();
    console.log("API status:", response.status);
}

runAPIRequest();

//One important clarification: await does not freeze the entire 
// JavaScript program. It pauses the execution of the current async 
// function at that line, while JavaScript can continue doing other work.

// Execution sequence
// 1. runAPIRequest() is called
//    JavaScript enters the async function.
// 2. apiRequest() is called
//    It returns a Promise.
// 3. JavaScript encounters await
//    The async function pauses until the Promise fulfils.
// 4. response receives { status: 200 }
//    Execution of the async function continues.
// 5. console.log() executes
//    Prints API status: 200.