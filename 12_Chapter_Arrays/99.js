let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);    // 10
console.log(b);    // 20
console.log(rest); // [30, 40, 50]


let [, , thirdOnly] = [10, 20, 30];
console.log(thirdOnly);

//This code teaches you array destructuring in JavaScript. Specifically, it shows how to extract an element from an array while skipping the elements you don't need.
//The commas represent positions in the array:
//- First comma: skip the first element (10).
//- Second comma: skip the second element (20).
//- thirdOnly: receive the third element (30).
// So JavaScript assigns 30 to the variable thirdOnly.