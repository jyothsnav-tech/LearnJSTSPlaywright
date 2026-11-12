async function getTestResults(){
        return Promise.resolve("abc")
}

// getTestResults().then(function(results){
//         console.log(results);
// });

async function test(){
   let r = await getTestResults();
   console.log(r);
}

test();
//This is an important point: an async function always returns a Promise,
// even when you return an ordinary string or number.

async function testAPI(){
    try {
        let result = await Promise.reject("503 Service Unavailable");
        console.log('Result', result);
    } catch (error) {
        console.log('Error', error);
    } finally {
        console.log("Clean up!!");
    }
}

testAPI();

//Let's see the complete execution flow
// 1. Call testAPI()
// 2. Enter try block
// 3. Promise rejected-> 503 Service Unavailable
// 4. Skip remaining statements in try-> console.log('Result', result) is not executed.
// 5. Execute catch -> Prints: Error 503 Service Unavailable
// 6. Execute finally -> Prints: Clean up!!