class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
    foo(){
        console.log("Foo Called!");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name); //calling the parent class constructor.
        this.breed = breed;
    }
    bark() {
        super.foo(); //calling a method belonging to the parent class.
        console.log(this.name, " is barking!")
    }
}
let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);