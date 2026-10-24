let original = [1, 2, 3];
let copy1 = [...original];
console.log(original);
console.log(copy1);

let copy2 = original.slice();
copy2.push(92);
copy1.push(93);
console.log(original);
console.log(copy1);
console.log(copy2);



// Deep cOPY
let deep_copy_array = original;
// Deep copy

deep_copy_array.push(91);
console.log(original);
console.log(deep_copy_array);

//What is the difference between shallow copy and deep copy?
//
//let copy = [...original]	Creates a shallow copy
//let copy = original.slice()	Creates a shallow copy
//let copy = original	Creates another reference to the same array
//Deep copy	Creates a separate copy, including nested objects and arrays

