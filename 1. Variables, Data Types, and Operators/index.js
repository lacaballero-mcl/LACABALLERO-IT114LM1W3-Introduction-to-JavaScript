/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.

// Using the var keyword
var myVar = "Hello, World!";
console.log(myVar);

// Try moving the variable declaration after logging
// It still works, but it's better practice to declare variables before using them
var myVar2;
console.log(myVar2);
myVar2 = "Hello, again!";


// TODO 1.2 Use the let keyword to define a variable.

// Using the let keyword
let myLet = "Variable with let keyword";
console.log(myLet);

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?

// Using the const keyword
const myConst = "Constant Variable";
console.log(myConst);
// Try reassigning the value (uncommenting the next line will result in an error)
// myConst = "New Value"; // This will throw an error

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is function-scoped and can be re-declared and reassigned; let is block-scoped, can be reassigned but not re-declared; const is block-scoped, cannot be reassigned or re-declared after initialization.

let a = 5;
let b = 2;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Arithmetic operators
let c = 5;
let d = 2;

console.log(c + d); // Addition
console.log(c - d); // Subtraction
console.log(c * d); // Multiplication
console.log(c / d); // Division
console.log(c % d); // Modulus
console.log(c ** d); // Exponentiation

// Checkpoint 1.2 What operators did you use?
// Answer: +, -, *, /, %, **

let string1 = "Hello";
let string2 = "World";

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// String operators
let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2); // Concatenation


// Checkpoint 1.3 What operators did you use?
// Answer: +

let boolean1 = true;
let boolean2 = false;

console.log(bool1 && bool2); // Logical AND
console.log(bool1 || bool2); // Logical OR
console.log(!bool1); // Logical NOT

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Logical operators
let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // Logical AND
console.log(bool1 || bool2); // Logical OR
console.log(!bool1); // Logical NOT


// Checkpoint 1.4 What operators did you use?
// Answer: &&, ||, !

let x = 5;
let y = "5";

console.log(x == y); // Equality (loose)
console.log(x === y); // Equality (strict)
console.log(x != y); // Inequality (loose)
console.log(x !== y); // Inequality (strict)
console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x >= y); // Greater than or equal
console.log(x <= y); // Less than or equal


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
let xStr = 5;
let yStr = "5";

console.log(x == y); // Equality (loose)
console.log(x === y); // Equality (strict)
console.log(x != y); // Inequality (loose)
console.log(x !== y); // Inequality (strict)
console.log(x > +y); // Greater than
console.log(x < +y); // Less than
console.log(x >= +y); // Greater than or equal
console.log(x <= +y); // Less than or equal


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] == false evaluates to true. This happens due to type coercion. The loose equality (==) operator performs type coercion, converting both sides to a common type before making the comparison. In this case, the array [] is coerced to an empty string "", and an empty string is falsy. Therefore, "" == false evaluates to true.