/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
if (randomNumber > 50) {
    console.log("more than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
if (randomNumber % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("fizzbuzz");
} else if (randomNumber % 3 === 0) {
    console.log("fizz");
} else if (randomNumber % 5 === 0) {
    console.log("buzz");
} else {
    console.log(randomNumber);
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: Switch statements are used to evaluate an expression against multiple possible case values. They are useful when you have a series of conditions and you want to execute different code blocks based on the value of the expression.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
for (let i = 1; i <= n; i++) {
    console.log(i);
}
const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
let index = 0;
while (index < list.length) {
    console.log(list[index]);
    index++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: A while loop checks the condition before the execution of the loop, while a do-while loop checks the condition after the execution of the loop. This means that a do-while loop will always execute at least once.


// TODO 2.7 Use a for of loop to display all the values in the list
for (const value of list) {
    console.log(value);
}

// TODO 2.8 Use a for in loop to display all the values in the list
for (const index in list) {
    console.log(list[index]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
list.forEach(value => console.log(value));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 
// - Use for-of loop when iterating over the values of an iterable (e.g., arrays).
// - Use for-in loop when iterating over the properties of an object.
// - Use forEach for arrays when you want to execute a function for each element, and you don't need the index.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing


if(denominator === 0){
    throw new Error("Division by zero error")
} else {
    console.log(numerator / denominator);
}