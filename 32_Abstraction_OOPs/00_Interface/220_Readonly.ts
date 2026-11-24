// Readonly

interface Point{
     x:number;
     y:number;
}

const point : Point = {
    x:10,
    y:10,
}
console.log(point)

point.x = 15
console.log(point)

// You are creating an interface named Point.This interface says:
// - Every Point object must have an x property containing a number.
// - Every Point object must have a y property containing a number.
// Remember, an interface defines the structure of an object. 
// It does not create the object itself.

// x: 10 Assigns 10 to property x
// y: 10 Assigns 10 to property y
// console.log(point) -> This prints the current object. Output-> { x: 10, y: 10 }

// Modifying the x property-> point.x = 15. It means: Go to the object named point, find the property x, and change its value to 15.
// Printing the object again ->{ x: 15, y: 10 }
// const prevents reassignment of the variable, but it does not prevent modification of properties inside an object.