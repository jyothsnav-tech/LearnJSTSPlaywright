//In JavaScript, inheritance allows one class to acquire the properties and 
// methods of another class.

class Father{
    eat(){
        console.log("Hi eating")
    }
}
class Son extends Father{
    walk(){
        console.log("Hi walking")
    }
}

//The keyword extends is very important.It means:Son inherits from Father.

const s = new Son();
const f = new Father();
s.walk()
s.eat();

f.eat();
// f.walk();
//This will produce a TypeError because Father does not have access to the 
// methods defined specifically inside Son.
//Inheritance works from parent to child, not automatically from child to parent.