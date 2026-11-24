// Here,two important concepts are introduced:
// 1. Classes implementing interfaces using the implements keyword.
// 2. Constructors in TypeScript classes.

interface Excetable{
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Excetable{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void {
        console.log("[RUN] " + this.name);
    }
    getStatus(): string {
        return "PASS";
    }
}

//class TestCase implements Excetable {
//This means: The TestCase class promises to follow the structure defined 
// by the Excetable interface.