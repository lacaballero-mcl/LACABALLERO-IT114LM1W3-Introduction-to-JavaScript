/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Then, Call the 'greet' function with your name as the argument
greet("Louise Angela");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: A function declaration is a statement that declares a function and hoists it to the top of the current scope, making it available before the code execution. A function expression, on the other hand, is an assignment where the function is assigned to a variable. Function declarations are hoisted, while function expressions are not.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
const calculateArea = function(length, width) {
    return length * width;
};

// Then, Call the 'calculateArea' function with any length and width as arguments
const rectangleArea = calculateArea(5, 10);
console.log("Rectangle Area:", rectangleArea);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function that is passed as an argument to another function, and it is invoked or executed after the completion of a certain operation. Callback functions are commonly used in asynchronous programming to handle tasks that take time to complete, such as reading a file, making a network request, or executing a time-consuming operation.

// Example 1: Synchronous Callback
function doSomething(callback) {
    console.log("Doing something...");
    callback();  // Invoking the callback function
}

function callbackFunction() {
    console.log("Callback function called.");
}

doSomething(callbackFunction);

// Example 2: Asynchronous Callback (using setTimeout)
function doAsyncTask(callback) {
    setTimeout(function() {
        console.log("Async task completed!");
        callback();  // Invoking the callback function after the asynchronous task is done
    }, 2000);
}

function asyncCallback() {
    console.log("Callback function for async task called.");
}

doAsyncTask(asyncCallback);


// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
function modifyArray(array, modifierFunction) {
    return array.map(modifierFunction);
}

// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
const incrementedNumbers = modifyArray(numbers, function(number) {
    return number + 1;
});

console.log("Incremented Numbers:", incrementedNumbers);
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
const { add, PI } = require('./mathUtils');

// Then, import and call the add method here and display the value of the PI constant
const result = add(5, 7);
console.log("Result of addition:", result);

// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.

// isPalindrome.js
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

module.exports = isPalindrome;

// Then, import and call the isPalindrome method here

// Your main file

// Import the isPalindrome method from isPalindrome.js
const isPalindrome = require('./isPalindrome');

// Call the isPalindrome method with a string
const result1 = isPalindrome("radar");
const result2 = isPalindrome("hello");

console.log("Is 'radar' a palindrome?", result1); // true
console.log("Is 'hello' a palindrome?", result2); // false

// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: The choice between 'require'/'module.exports' and 'import'/'export' depends on the specific context, project requirements, and the JavaScript environment. Both systems have their use cases, and the decision should consider compatibility, project needs, and personal/team preferences.
