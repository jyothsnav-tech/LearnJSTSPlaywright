class TestCase {
    execute() {
        console.log("Running generic test");
    }
}
//Here, TestCase defines a method called execute(). This is the default behaviour.

class UnitTest extends TestCase {
    execute() {
        console.log("Running unit test — checking one function");
    }
}
//Here, The child class is overriding that method. It says "When someone calls 
// execute() on a UnitTest object, use my implementation instead of the 
// parent's implementation."

class APITest extends TestCase {
    execute() {
        console.log("Running API test — sending HTTP request");
    }
}
class E2ETest extends TestCase {
    execute() {
        console.log("Running E2E test — opening browser");
    }
}
let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach(function (test) {
    test.execute();
});

//JavaScript checks the actual type of each object and calls the corresponding implementation.
//Object	Which execute() runs?
//UnitTest	UnitTest's method
//APITest	APITest's method
//E2ETest	E2ETest's method
//Therefore, the parent's execute() method is never called.
//Important: The parent method still exists. It hasn't been deleted or replaced. 
// The child objects simply use their own implementation when the same method is called.

//One important distinction: super() is required when a child class has an 
// explicit constructor. It is not required when the child class has no constructor of its own.