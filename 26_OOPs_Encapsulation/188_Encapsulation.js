class Person{
    // hide my variable
    #child1;
    #child2;
    constructor(name, child1, child2){
        this.name = name;
        this.#child1 = child1;
        this.#child2 = child2;
    }

    getChild(){ // M/O
        return this.#child1;
    }
    setChild(changed_name) // W/F
    {
        this.#child1 = changed_name;
    }
}

let p = new Person("Pramod", "Vrad", "Jenny");
//  console.log(p.#child1);
//This is not allowed. JavaScript will throw a syntax error.Because your class is 
// protecting the variable #child1 from direct outside access.
 
console.log(p.getChild());
//We cannot access #child1 directly from outside the class. But we can access it through 
// a getter method defined inside the class.
//The method itself belongs to the class and is allowed to access its private fields.
//getChild() is a controlled way to read private data.
//setChild() changes the private variable.

 p.setChild("VIRAD");
 console.log(p.getChild());

 console.log(p.name);
 p.name = "Amit";

 //Encapsulation means keeping data and the methods that operate on that data together 
 // inside a class, while controlling how that data can be accessed or changed.