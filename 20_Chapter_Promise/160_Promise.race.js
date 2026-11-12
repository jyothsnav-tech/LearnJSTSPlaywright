let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }), 100
});

//setTimeout() is a built-in JavaScript function. It means:
//"Execute this function after approximately 100 milliseconds."
//Here:- function() { resolve("Fast 100ms") } is the callback function.
//- 100 is the delay in milliseconds. - 100 milliseconds = 0.1 seconds.
//setTimeout() schedules the callback. It does not block JavaScript for that duration.

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Slow 500ms")
    }), 500
});

Promise.race([fastServer, slowServer]).then(function (winner) {
    console.log("Winner:", winner);
})