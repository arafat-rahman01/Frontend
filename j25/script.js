//  Math functions
console.log(Math.sqrt(25));           // Square root
console.log(Math.pow(2, 5));          // Power
console.log(Math.max(10, 20, 30));    // Max value
console.log(Math.random());           // Random number

//  String functions
let str = "Hello, JavaScript!";
console.log(str.toUpperCase());       // Convert to uppercase
console.log(str.includes("Java"));    // Check substring
console.log(str.replace("JavaScript", "World")); // Replace text
console.log(str.split(" "));          // Split into array

//  Array functions
let nums = [1, 2, 3, 4, 5];
console.log(nums.map(x => x * 2));    // Double each element
console.log(nums.filter(x => x % 2)); // Filter odd numbers
console.log(nums.reduce((a, b) => a + b)); // Sum of elements
console.log(nums.reverse());          // Reverse array

//  Custom functions
function greet(name) {
  return `Hello, ${name}!`;
}
function add(a, b) {
  return a + b;
}
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(greet("Arafat"));         // Custom greeting
console.log(add(10, 15));             // Addition
console.log(factorial(5));            // Factorial

//  Function calls inside another function
function processData(data) {
  return data.map(x => Math.sqrt(x)).filter(x => x > 2);
}
console.log(processData([1, 4, 9, 16, 25]));