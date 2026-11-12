import { BASE_URL, formatUpperCaseString} from './testutils.js';

console.log(BASE_URL);

let result = formatUpperCaseString("Pramod");
console.log(result);

// This tells JavaScript:
// - Go to the file testutils.js.
// - Bring the exported variable BASE_URL into this file.
// - Bring the exported function formatUpperCaseString into this file.
// What does ./ mean?
// It means the file is located relative to the current file, in the same directory in this example.
// And why are there curly braces { }?
// Because these are named exports. We are importing specific items by their exported names.