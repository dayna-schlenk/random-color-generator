let nums = [12, 24, 56, 3, 4, 5, 8, 9, 2345];

console.log("boy", "girl", "man", "woman", "whatever");
// prints with spaces

console.log(nums);
// prints with brackets

console.log(...nums);
// prints without brackets

// can also spread into a function call
console.log("hello");
// hello

console.log(..."hello");
// h e l l o
// passed in as separate characters/separate standalone arguments