/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];
console.log("First Item:", firstItem);
console.log("Fifth Item:", fifthItem);
console.log("Last Item:", lastItem);

// Todo 3.2 calculate the min, max, and the average of the numbers array
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);
const averageNumber = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
console.log("Min Number:", minNumber);
console.log("Max Number:", maxNumber);
console.log("Average Number:", averageNumber);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: In Python, lists are similar to arrays in JavaScript but have some differences. Lists in Python can contain elements of different types, while arrays in JavaScript typically have elements of the same type. Additionally, arrays in JavaScript have a variety of built-in methods that make it easier to manipulate and work with the data they contain.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
const it114lObject = {
    courseCode: "IT114L",
    name: "Introduction to Programming",
    units: 3,
    numberOfStudents: 50
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
it114lObject.professorName = "Dr. Smith";
console.log("Professor Name:", it114lObject.professorName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
const coursesArray = [
    { courseCode: "IT114L", units: 3 },
    { courseCode: "Math101", units: 4 },
    { courseCode: "Eng202", units: 3 }
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
const totalUnits = coursesArray.reduce((acc, course) => acc + course.units, 0);
console.log("Total Units:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of objects in Python is dictionaries. Both objects in JavaScript and dictionaries in Python are key-value pairs, allowing the storage and retrieval of data using unique keys.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
const copiedNumbers = [...numbers, 99];
console.log("Copied Numbers with Additional Number:", copiedNumbers);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
const { courseCode: itCourseCode, units: itUnits } = it114lObject;
console.log("IT114L Course Code:", itCourseCode);
console.log("IT114L Units:", itUnits);
