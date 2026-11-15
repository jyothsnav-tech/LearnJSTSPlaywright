class Credentials{
    #apiKey;
    
    constructor(user,key){
        this.user = user;
        this.#apiKey = key;
    }
    getAPI(){
        return this.#apiKey;
    }
}

let cred = new Credentials("admin", "#scret_key_1234");
console.log(cred.user);
//console.log(cred.#apiKey);
// This will produce a SyntaxError because you are trying to access a private field from outside its class.
// JavaScript does not allow this.


// What is a constructor?
// A constructor is a special method inside a class.
// Its job is to initialize an object when you create it.
// Think about a real-world example.
// Suppose you are creating a user account in an application.
// Every user account needs:
// - A username
// - An API key
// Instead of creating these properties manually every time, you can use a constructor.

// #apiKey;
// This declares a private field inside the class.
// The # symbol tells JavaScript that this field can only be accessed from inside the class.