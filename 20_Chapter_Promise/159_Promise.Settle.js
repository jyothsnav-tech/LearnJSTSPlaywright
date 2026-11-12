Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})

// The important difference is:
// - Promise.all() rejects the combined Promise if even one of the 
// supplied Promises fails.
// - Promise.allSettled() waits for every Promise to finish, whether 
// it succeeds or fails, and gives you the outcome of each one.

//For a QA engineer, Promise.allSettled() is particularly useful 
// when you want to execute multiple independent test cases and collect 
// the outcome of every test, including failures.
 

//JavaScript has a built-in array method called forEach().
//forEach() executes a function once for every element in an array.