//Note: JavaScript provides a shorter way of creating an already 
// fulfilled Promise using Promise.resolve() and an already rejected Promise using Promise.reject().

let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");


Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})

//Promise.all() collects the fulfilled values of all the Promises and 
// passes them as an array to the .then() callback.
//So: results = ["Auth Ok", "DB OK", "Cache OK"]

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) {
        console.log(r);
    })
    .catch(function (err) {
        console.log("Failed:", err);
    });

//Rule:
// Promise.all() fulfils only when all supplied Promises fulfil.
// If even one Promise rejects, the Promise returned by Promise.all() rejects.
// Therefore, the .then() success callback will not execute.
// Instead, the .catch() executes.