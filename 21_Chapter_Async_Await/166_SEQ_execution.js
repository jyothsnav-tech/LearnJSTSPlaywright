//The below demonstrates something important: 
// JavaScript can wait for one asynchronous operation to finish 
// before starting the next one.

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + ": 200 OK");
        }, 1000);
    });
}

async function sequentialTest() {
    console.log("Starting of the Test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Dashboard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now() - start) + "ms");
}

sequentialTest();

//Date.now() returns the current time in milliseconds since January 1, 1970 (Unix epoch).

// Here is what happens:
// 1. apiCall("Login") is called.
// 2. It creates a Promise.
// 3. setTimeout() schedules the resolve() call after approximately 1 second.
// 4. await pauses the execution of sequentialTest().
// 5. After the Promise is fulfilled, its value is assigned to r1.
// 6. console.log(r1) prints the result.
// Output:
// Login: 200 OK

// Visualise the sequential execution
// Execution timeline
// 1. Starting of the Test
//    Record the start time.
// 2. Login API
//    ~1 second
//    Wait for Promise → receive Login: 200 OK.
// 3. Dashboard API
//    ~1 second
//    Wait for Promise → receive Dashboard: 200 OK.
// 4. Report API
//    ~1 second
//    Wait for Promise → receive Report: 200 OK.
// 5. Print total execution time
//    ~3 seconds total
// 5. Final output
// Starting of the Test
// Login: 200 OK
// Dashboard: 200 OK
// Report: 200 OK
// Time: ~3000ms
// The exact time may vary.