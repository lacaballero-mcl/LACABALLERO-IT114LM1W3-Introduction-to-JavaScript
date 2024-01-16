// Todo 4.6a Create a funciton called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation

function isPalindrome(word) {
    // Clean the word by converting to lowercase and removing non-alphanumeric characters
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the cleaned word with its reversed version
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

// Export the isPalindrome function
module.exports = isPalindrome;

// Example of using isPalindrome module
const isPalindrome = require('./isPalindrome');

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false


// Todo 4.6b Set the isPalindrome function as the default export of the module
module.exports = isPalindrome;

// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx

// Example of using isPalindrome module
const isPalindrome = require('./isPalindrome');

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false