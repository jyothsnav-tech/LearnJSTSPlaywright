interface User{
    name:string,
    age: number,
    email : string
}

let user1:User = {
    name: "Prmaod",
    age : 100,
    email : "abcaa@gmail.com"
}

//let user1: User
//This means: "TypeScript, I am creating a variable called user1, 
//and its value must follow the structure defined by the User interface."

const user2:User = {
    name: "Prmaod",
    age: 90,
    email : "abcaa@gmail.com"
}

const user3: User = {
    name: "John3",
    age : 23,
    email: "abc@gmail.com"
}

//What is an Interface?
//In simple words:
//An interface is a blueprint that defines what properties an object should 
// have and what type of values those properties should contain.
//Imagine you're testing a User Registration page.Every user must have:
//- A name → String
//- An age → Number
//- An email → String
//You want to make sure every user object follows this structure.
// That's where a TypeScript interface helps.