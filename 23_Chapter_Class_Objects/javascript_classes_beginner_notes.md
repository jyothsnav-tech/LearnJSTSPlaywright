# JavaScript Classes --- Beginner Notes

## 1. What is a class?

A **class** is a blueprint or template for creating objects.

Think of a class as a design for a type of thing. The class describes:

-   **Attributes / properties / data members:** what information an
    object stores.
-   **Methods / behaviours / member functions:** what an object can do.

For example, a `Person` class might describe that every person object
has a name, age, and phone number, and can perform actions such as
eating and sleeping.

A class is the blueprint. An object is an actual instance created using
that blueprint.

## 2. Understanding the mentor's code

``` javascript
class Person {
    // Attributes | Instance variables | Data members | Properties
    #name;
    #age;
    #rollNo;
    #phoneNo;

    // Behaviour | Methods | Member functions
    eat() {}
    sleep() {}
}

// CAB -> Class has A and B

const pramod = new Person();
const amit = new Person();
```

Let's break this down.

### `class Person`

``` javascript
class Person {
}
```

-   `class` is the JavaScript keyword used to define a class.
-   `Person` is the class name.
-   The curly braces contain the class's properties and methods.

By convention, class names usually start with a capital letter, such as
`Person`, `Student`, or `Employee`.

### `#name`, `#age`, `#rollNo`, and `#phoneNo`

``` javascript
#name;
#age;
#rollNo;
#phoneNo;
```

These are **private instance fields**.

-   A field is a place where an object can store data.
-   The `#` symbol makes the field private.
-   Private fields can be accessed only from inside the class.
-   Code outside the class cannot directly read or change them.

For example, this is not allowed:

``` javascript
const pramod = new Person();
console.log(pramod.#name); // Syntax error: private field is not accessible here
```

The fields in the mentor's example are declared but are not yet given
values. They will initially contain `undefined` until values are
assigned.

### `eat()` and `sleep()`

``` javascript
eat() {}
sleep() {}
```

These are **methods**. A method is a function defined inside a class to
describe an object's behaviour.

In JavaScript class syntax, we do not write the `function` keyword
before a method.

For comparison:

``` javascript
// Ordinary function
function eat() {
    console.log("Eating");
}

// Method inside a class
class Person {
    eat() {
        console.log("Eating");
    }
}
```

The methods in the mentor's example have empty bodies, so calling them
currently produces no visible output.

## 3. What does CAB mean?

In this example, CAB is a reminder that a class contains:

-   **A --- Attributes:** the data an object stores.
-   **B --- Behaviour:** the actions an object can perform.

For the `Person` class:

  Part         Example              Meaning
  ------------ -------------------- ------------------------------
  Attributes   `#name`, `#age`      Information about a person
  Behaviour    `eat()`, `sleep()`   Actions a person can perform

The exact phrase used by different teachers may vary, but the central
idea is that a class groups related data and behaviour together.

## 4. What does `new Person()` do?

``` javascript
const pramod = new Person();
```

This statement creates a new object using the `Person` class.

Step by step:

1.  JavaScript sees `new Person()`.
2.  It creates a new object based on the `Person` class.
3.  It runs the class's constructor. Since no constructor is written in
    this example, JavaScript provides a default constructor.
4.  The new object's reference is assigned to the variable `pramod`.

The object is an **instance** of the `Person` class.

### What is an object reference?

The variable `pramod` holds a reference to the newly created object. You
can think of it as a way to access that object.

``` javascript
const pramod = new Person();
const amit = new Person();
```

These two statements create **two separate objects**:

-   `pramod` refers to the first object.
-   `amit` refers to the second object.

Both objects were created from the same `Person` class, so they share
the same class design. But they are separate instances and can hold
different data.

A simple analogy:

-   Class: a blank student-record form design.
-   Object: one completed student record made using that design.
-   Another object: a different student record made using the same
    design.

## 5. Why are there parentheses after `Person`?

``` javascript
new Person()
```

The parentheses are part of the object-creation syntax. They allow
arguments to be passed to a constructor when the class has one.

The mentor's example does not define a constructor yet, so there are no
arguments to pass.

You will learn how to define a constructor and use it to initialise each
object's data next.

## 6. A small example with visible behaviour

Here is a version using a public method so you can see what happens when
a method is called:

``` javascript
class Person {
    eat() {
        console.log("The person is eating");
    }

    sleep() {
        console.log("The person is sleeping");
    }
}

const pramod = new Person();
const amit = new Person();

pramod.eat();
amit.sleep();
```

Output:

``` text
The person is eating
The person is sleeping
```

Notice:

-   `Person` defines the methods.
-   `new Person()` creates objects.
-   `pramod.eat()` calls the `eat` method on the object referenced by
    `pramod`.
-   `amit.sleep()` calls the `sleep` method on the object referenced by
    `amit`.

## 7. Important distinction: class, object, and reference

  -----------------------------------------------------------------------
  Term                    In this example         Meaning
  ----------------------- ----------------------- -----------------------
  Class                   `Person`                The blueprint

  Object / instance       The object created by   An actual item created
                          `new Person()`          from the blueprint

  Reference variable      `pramod`, `amit`        A variable holding a
                                                  reference to an object

  Property / field        `#name`, `#age`         Data associated with an
                                                  object

  Method                  `eat()`, `sleep()`      Behaviour defined by
                                                  the class
  -----------------------------------------------------------------------

## 8. A note about `const`

``` javascript
const pramod = new Person();
```

`const` means that the variable `pramod` cannot be reassigned to refer
to a different object.

It does **not** mean that the object itself can never change. An
object's properties may still be changed when the class allows it.

## 9. What to learn next

A useful order for learning classes is:

1.  **Constructor:** a special method that runs when a new object is
    created.
2.  **`this`:** refers to the object on which a method is being called.
3.  **Initialising properties:** giving each object its own starting
    values.
4.  **Getters and setters:** controlled ways to read or update
    properties.
5.  **Inheritance:** creating a class based on another class.

### Quick recap

-   A class is a blueprint for creating objects.
-   An object is an instance of a class.
-   Fields/properties store data.
-   Methods define behaviour.
-   `#` marks a private field in JavaScript.
-   `new Person()` creates a new `Person` object.
-   `pramod` and `amit` refer to two separate objects created from the
    same class.
-   Class methods use `methodName() {}` syntax; they do not need the
    `function` keyword.
