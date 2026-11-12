//Concept: A function can return a Promise, and another function can be called 
// only after that Promise is fulfilled.

// Created four functions:
// 1. openBrowser()
// 2. goToLogin()
// 3. enterCredentials()
// 4. clickLogin()
// Each function represents one browser automation action.


function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser has been opened!");
    })
}

// What is happening here?
// - function openBrowser() creates a function.
// - return means the function will give something back when it is called.
// - new Promise() creates a Promise.
// - resolve() fulfills that Promise with the message "Browser has been opened!".
// So, when someone calls openBrowser(), the function returns a fulfilled Promise.

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

openBrowser()
    .then(function (msg) {
        console.log("Step 1", msg);
        return goToLogin();
    }).then(function (msg) {
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 :", msg);
    }).catch(function (error) {
        console.log("Error:", error);
    }).finally(function () {
        console.log("Done execution!");
    });

//Understanding the flow of the code
// 1. openBrowser()
// Returns Promise: Browser has been opened!
// First .then()
// Prints Step 1
// return goToLogin()
// 2. goToLogin()
// Returns Promise: Login page loaded
// Second .then()
// Prints Step 2
// return enterCredentials()
// 3. enterCredentials()
// Returns Promise: Credentials entered
// Third .then()
// Prints Step 3
// return clickLogin()
// 4. clickLogin()
// Returns Promise: Logged in successfully
// Fourth .then()
// Prints Step 4
// .finally()
// Done execution!
