# JavaScript Promises --- My Beginner Knowledge Repository

> **Learning style:** Explain it like I am five (ELI5).\
> **Goal:** Understand what a Promise is, how it works, and how to read
> Promise code used in QA automation.

------------------------------------------------------------------------

## 1. What is a Promise?

Imagine you order a pizza.

-   You place the order.
-   The restaurant starts preparing it.
-   A little later, the pizza is ready --- or the restaurant tells you
    it cannot fulfil the order.

You do not receive the pizza at the exact moment you place the order.
You receive the result later.

JavaScript has similar situations. For example:

-   Sending a request to a server.
-   Getting information from an API.
-   Reading a file.
-   Waiting for a browser action to finish.

These operations can take time. A **Promise** is a JavaScript object
that represents the result we expect in the future.

A Promise can be in one of three states:

  -----------------------------------------------------------------------
  State                   Simple meaning          Example
  ----------------------- ----------------------- -----------------------
  `pending`               Still waiting           The pizza is being
                                                  prepared

  `fulfilled`             Finished successfully   The pizza is ready

  `rejected`              Finished with a failure The restaurant cannot
                                                  make the pizza
  -----------------------------------------------------------------------

A Promise starts as `pending`. It eventually becomes either `fulfilled`
or `rejected`.

Once a Promise is fulfilled or rejected, it is called **settled**. A
settled Promise does not go back to pending.

------------------------------------------------------------------------

## 2. Creating a Promise: `new Promise()`

Here is a simple example:

``` javascript
let myPromise = new Promise(function(resolve, reject) {
    resolve("Task completed!");
});
```

Read it in small pieces:

1.  `let myPromise` creates a variable.
2.  `new Promise(...)` creates a Promise object.
3.  The function inside `new Promise()` is called the **executor
    function**. JavaScript runs it immediately when the Promise is
    created.
4.  The executor receives two functions: `resolve` and `reject`.
5.  Calling `resolve("Task completed!")` fulfils the Promise and
    supplies its result.

### What are `resolve` and `reject`?

Think of them as two ways to finish a task:

-   `resolve(value)` means: "The task succeeded. Here is the result."
-   `reject(reason)` means: "The task failed. Here is the reason."

Example of success:

``` javascript
let successPromise = new Promise(function(resolve, reject) {
    resolve("Test passed");
});
```

Example of failure:

``` javascript
let failurePromise = new Promise(function(resolve, reject) {
    reject("Test failed");
});
```

In this simple example, only one of the two functions is called.

------------------------------------------------------------------------

## 3. Handling success with `.then()`

`.then()` lets us say what should happen when a Promise is fulfilled.

``` javascript
let apiCall = new Promise(function(resolve, reject) {
    resolve({ status: 200, body: "User Data" });
});

apiCall.then(function(response) {
    console.log(response);
});
```

### Follow the value

The Promise is fulfilled with this object:

``` javascript
{ status: 200, body: "User Data" }
```

The `.then()` callback receives that value in its parameter named
`response`.

So this:

``` javascript
.then(function(response) {
    console.log(response);
});
```

prints:

``` text
{ status: 200, body: "User Data" }
```

**Important:** `response` is only a parameter name. It could be called
`data`, `result`, or another valid name.

The value passed to `resolve(...)` becomes the value received by the
first `.then()` callback.

------------------------------------------------------------------------

## 4. Handling failure with `.catch()`

`.catch()` handles a rejected Promise.

``` javascript
let testRun = new Promise(function(resolve, reject) {
    reject("Assertion Failed");
});

testRun
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });
```

What happens?

1.  `testRun` is created.
2.  `reject("Assertion Failed")` rejects it.
3.  The success callback in `.then()` is skipped.
4.  `.catch()` runs.
5.  Its `error` parameter receives `"Assertion Failed"`.

Console output:

``` text
Assertion Failed
```

### Remember

-   `.then()` handles successful fulfilment.
-   `.catch()` handles rejection.

A `.catch()` at the end of a chain can handle a rejection or an error
thrown by an earlier callback in that chain.

------------------------------------------------------------------------

## 5. Promise chaining: doing steps one after another

This is especially useful in browser automation.

Imagine these steps:

1.  Open the browser.
2.  Go to the login page.
3.  Enter credentials.
4.  Click Login.

Each step must finish before the next step begins.

### The example

``` javascript
function openBrowser() {
    return new Promise(function(resolve) {
        resolve("Browser has been opened!");
    });
}

function goToLogin() {
    return new Promise(function(resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function(resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function(resolve) {
        resolve("Logged in successfully");
    });
}

openBrowser()
    .then(function(msg) {
        console.log("Step 1:", msg);
        return goToLogin();
    })
    .then(function(msg) {
        console.log("Step 2:", msg);
        return enterCredentials();
    })
    .then(function(msg) {
        console.log("Step 3:", msg);
        return clickLogin();
    })
    .then(function(msg) {
        console.log("Step 4:", msg);
    })
    .catch(function(error) {
        console.log("Error:", error);
    })
    .finally(function() {
        console.log("Done execution!");
    });
```

### First, understand function definition versus function calling

Defining a function means creating it:

``` javascript
function openBrowser() {
    // instructions
}
```

This does not run the function yet.

Calling it means using its name followed by parentheses:

``` javascript
openBrowser();
```

That runs the function.

### What does `return` do here?

Look at:

``` javascript
openBrowser()
    .then(function(msg) {
        console.log("Step 1:", msg);
        return goToLogin();
    })
```

-   `openBrowser()` is called.
-   It returns a Promise.
-   When that Promise fulfils, the first `.then()` callback runs.
-   `msg` receives `"Browser has been opened!"`.
-   `goToLogin()` is called.
-   `return` passes the Promise from `goToLogin()` back to the Promise
    chain.

The next `.then()` waits for that returned Promise to settle. If it
fulfils, the next callback runs and receives its fulfilment value.

This pattern repeats for `enterCredentials()` and `clickLogin()`.

### Why is `return` important?

Compare these two versions.

**Version A --- return the Promise:**

``` javascript
.then(function(msg) {
    console.log(msg);
    return goToLogin();
})
```

The next `.then()` waits for the Promise returned by `goToLogin()`.

**Version B --- do not return the Promise:**

``` javascript
.then(function(msg) {
    console.log(msg);
    goToLogin();
})
```

Here, `goToLogin()` is called, but its Promise is not returned to the
chain. The current callback returns `undefined`, so the next `.then()`
does not wait for `goToLogin()`.

**Memory tip:** If the next step in a Promise chain must wait for an
operation, return that operation's Promise.

### What does `.finally()` do?

`.finally()` runs when the chain settles --- after success or after
failure has been handled.

It is useful for cleanup work, such as closing a browser or releasing a
resource.

It normally does not receive the fulfilment value or rejection reason as
an argument.

### Expected output for the example

``` text
Step 1: Browser has been opened!
Step 2: Login page loaded
Step 3: Credentials entered
Step 4: Logged in successfully
Done execution!
```

**Important real-world note:** These functions only simulate browser
actions by immediately resolving with messages. They do not actually
open a browser or enter credentials. Real browser automation functions
would perform those actions and return Promises that settle when the
actions complete.

------------------------------------------------------------------------

## 6. `Promise.resolve()` and `Promise.reject()`

JavaScript provides shorter ways to create already-settled Promises.

### `Promise.resolve()`

``` javascript
let checkAuth = Promise.resolve("Auth OK");
```

This creates a Promise that is already fulfilled with `"Auth OK"`.

It is similar in result to:

``` javascript
let checkAuth = new Promise(function(resolve) {
    resolve("Auth OK");
});
```

### `Promise.reject()`

``` javascript
let checkDB = Promise.reject("DB DOWN");
```

This creates a Promise that is already rejected with `"DB DOWN"`.

These methods are useful in examples and tests because they let us
create successful or failed Promises without performing a real
operation.

------------------------------------------------------------------------

## 7. `Promise.all()`: all must succeed

Imagine three independent checks:

-   Authentication
-   Database
-   Cache

We want the combined operation to succeed only if all three Promises
succeed.

``` javascript
let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache])
    .then(function(results) {
        console.log("All checks:", results);
    });
```

### What happens?

1.  An array containing three Promises is passed to `Promise.all()`.
2.  `Promise.all()` waits for all of them to fulfil.
3.  If all fulfil, the combined Promise fulfils.
4.  The `.then()` callback receives an array of their values.

Output:

``` text
All checks: ["Auth OK", "DB OK", "Cache OK"]
```

### What if one fails?

``` javascript
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function(results) {
        console.log(results);
    })
    .catch(function(error) {
        console.log("Failed:", error);
    });
```

The combined Promise rejects because one input Promise rejected.

Output:

``` text
Failed: DB DOWN
```

The success callback does not run.

### Important details

-   `Promise.all()` fulfils only if every input Promise fulfils.
-   It rejects as soon as an input Promise rejects.
-   It does not cancel the other operations.
-   If it fulfils, its result array follows the original input order,
    not the order in which the Promises finished.

**Memory tip:** `Promise.all()` = "I need everybody to succeed."

------------------------------------------------------------------------

## 8. `Promise.allSettled()`: tell me everyone's result

Now imagine we are running three independent tests.

-   Test A passes.
-   Test B fails.
-   Test C passes.

We still want to collect the outcome of every test.

That is what `Promise.allSettled()` does.

``` javascript
Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function(results) {
    results.forEach(function(r, i) {
        console.log(
            "Test " + (i + 1) + ":",
            r.status,
            "-",
            r.value || r.reason
        );
    });
});
```

### What does `Promise.allSettled()` return?

It returns an array of result objects.

A successful Promise produces an object like:

``` javascript
{
    status: "fulfilled",
    value: "Test A Passed!"
}
```

A rejected Promise produces an object like:

``` javascript
{
    status: "rejected",
    reason: "Test B failed"
}
```

### Understanding `forEach()`

`forEach()` is an array method. It runs a callback once for every array
element.

``` javascript
results.forEach(function(r, i) {
    // instructions
});
```

-   `r` is the current result object.
-   `i` is its index (position) in the array.

Array indexes start at zero:

    `i`   `i + 1`
  ----- ---------
      0         1
      1         2
      2         3

That is why the example uses `i + 1` to display Test 1, Test 2, and Test
3.

### Understanding `r.status`

This reads the status from the current result object:

``` javascript
r.status
```

It will be either `"fulfilled"` or `"rejected"`.

### Understanding `r.value || r.reason`

The `||` operator is logical OR. It returns the first truthy value, or
the second value if the first is falsy.

-   For a fulfilled Promise, `r.value` normally contains the result.
-   For a rejected Promise, `r.value` is absent, so `r.reason` contains
    the failure reason.

A more reliable way to choose the right property --- especially if a
successful value might be `""`, `0`, or `false` --- is:

``` javascript
r.status === "fulfilled" ? r.value : r.reason
```

### Expected output

``` text
Test 1: fulfilled - Test A Passed!
Test 2: rejected - Test B failed
Test 3: fulfilled - Test C passed
```

### Important details

-   `Promise.allSettled()` waits until every input Promise has settled.
-   It does not reject just because one of the input Promises rejects.
-   It gives an outcome object for each input Promise.
-   The result objects follow the original input order.

**Memory tip:** `Promise.allSettled()` = "Tell me what happened to
everybody, whether they passed or failed."

------------------------------------------------------------------------

## 9. `Promise.race()`: first one to settle wins

Imagine two servers are responding to requests.

-   Server 1 takes about 100 milliseconds.
-   Server 2 takes about 500 milliseconds.

We want to know which Promise settles first.

``` javascript
let fastServer = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Fast 100ms");
    }, 100);
});

let slowServer = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Slow 500ms");
    }, 500);
});

Promise.race([fastServer, slowServer])
    .then(function(winner) {
        console.log("Winner:", winner);
    });
```

### First, understand `setTimeout()`

`setTimeout()` schedules a callback to run after a delay, in
milliseconds.

``` javascript
setTimeout(function() {
    resolve("Fast 100ms");
}, 100);
```

This means:

"Schedule this callback to run after approximately 100 milliseconds."

-   100 milliseconds = 0.1 seconds.
-   500 milliseconds = 0.5 seconds.

The timer does not block JavaScript. It schedules the callback to run
later.

### What does `Promise.race()` do?

``` javascript
Promise.race([fastServer, slowServer])
```

It settles as soon as the first input Promise settles.

In this example, `fastServer` fulfils first, so the combined Promise
fulfils with `"Fast 100ms"`.

Output:

``` text
Winner: Fast 100ms
```

### Important: first to settle does not always mean first to succeed

Suppose the first Promise rejects and the second Promise fulfils later.
`Promise.race()` rejects with the first Promise's rejection.

It does not ignore failures.

Also, `Promise.race()` does not cancel the slower operation. The slower
timer or request can continue running.

**Memory tip:** `Promise.race()` = "Whichever Promise settles first
decides the result --- success or failure."

------------------------------------------------------------------------

## 10. Compare the four Promise methods

This is the most useful summary of the methods learned so far.

  ------------------------------------------------------------------------
  Method                   What does it wait for?  What happens if one
                                                   input rejects?
  ------------------------ ----------------------- -----------------------
  `Promise.all()`          All inputs to fulfil    Combined Promise
                                                   rejects

  `Promise.allSettled()`   Every input to settle   Returns every outcome

  `Promise.race()`         First input to settle   Combined Promise adopts
                                                   that first outcome

  `Promise.any()`          First input to fulfil   Keeps waiting; rejects
                                                   if all inputs reject
  ------------------------------------------------------------------------

`Promise.any()` is included for comparison. It has not yet been covered
in detail.

### An easy way to remember

-   **ALL:** Everybody must succeed.
-   **ALL SETTLED:** Tell me everybody's result.
-   **RACE:** First to finish decides.
-   **ANY:** First success wins.

------------------------------------------------------------------------

## 11. A few important concepts to remember

### A. Creating a Promise is not the same as calling `.then()`

The executor function inside `new Promise()` runs immediately when the
Promise is created.

The callback passed to `.then()` runs later, when the Promise is
fulfilled. Promise callbacks are scheduled as microtasks.

### B. `resolve()` and `reject()` settle a Promise

-   `resolve(value)` fulfils it with a value.
-   `reject(reason)` rejects it with a reason.

### C. A Promise can be returned from a function

``` javascript
function getData() {
    return new Promise(function(resolve) {
        resolve("Data received");
    });
}
```

Calling `getData()` returns a Promise.

### D. Returning a Promise keeps a chain connected

``` javascript
firstStep()
    .then(function(result) {
        return secondStep();
    })
    .then(function(result) {
        // Runs after secondStep's returned Promise fulfils
    });
```

If you leave out `return`, the next `.then()` does not wait for the
Promise created by `secondStep()`.

### E. Promise results do not have to be strings

A Promise can fulfil with a string, number, object, array, or other
value.

For example:

``` javascript
Promise.resolve(100);

Promise.resolve({ id: 101, name: "Ravi" });

Promise.resolve([10, 20, 30]);
```

------------------------------------------------------------------------

## 12. Quick self-check

Try answering these without looking at the explanations above.

1.  What are the three states of a Promise?
2.  What is the difference between `resolve()` and `reject()`?
3.  Which method handles a successful Promise?
4.  Which method handles a rejected Promise?
5.  Why do we use `return` inside a Promise chain?
6.  What happens to `Promise.all()` if one input Promise rejects?
7.  Does `Promise.allSettled()` stop collecting results when one Promise
    fails?
8.  What do `status`, `value`, and `reason` represent in an
    `allSettled()` result?
9.  What does `forEach()` do?
10. Does `Promise.race()` always return a successful result?
11. Does `Promise.race()` cancel the slower operation?
12. What is the difference between `Promise.all()` and `Promise.any()`?

------------------------------------------------------------------------

## 13. What I have learned so far

My current Promise learning checklist:

-   [ ] I understand what a Promise represents.
-   [ ] I can identify `pending`, `fulfilled`, and `rejected`.
-   [ ] I understand `new Promise()`, `resolve()`, and `reject()`.
-   [ ] I can read `.then()` and `.catch()`.
-   [ ] I understand `.finally()`.
-   [ ] I can follow a Promise chain and explain why `return` matters.
-   [ ] I understand `Promise.resolve()` and `Promise.reject()`.
-   [ ] I understand `Promise.all()`.
-   [ ] I understand `Promise.allSettled()`.
-   [ ] I understand `forEach()` in the `allSettled()` example.
-   [ ] I understand `setTimeout()` at a basic level.
-   [ ] I understand `Promise.race()`.

**My learning reminder:** I do not need to memorise every line of syntax
immediately. I should be able to read the code, identify which Promise
settles, follow where its value goes, and explain which callback runs
next.

------------------------------------------------------------------------

*End of current Promise notes. Add new sections as more Promise concepts
are covered.*
