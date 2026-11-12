class Person{
    // Attributes | Instance variables |  Data members | Properties
    #name;
    #age;
    #rollNo;
    #phoneNo;

    // Behaviour | Methods | Members Functions | 
     eat() {
        console.log(this.#name + " is eating");
    }}
    sleep() {
        console.log(this.#name + " is sleeping");
    }
}


// # and we are not using function key in class for the f(n)

// CAB -> Class has the A, B

const pramod = new Person();
// Object -> new Person();
// Object Ref -> pramod

const amit = new Person();

