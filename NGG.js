const prompt = require('prompt-sync')(); // Import prompt-sync

console.log('Welcome to the Number Guessing Game!');
console.log('I am thinking of a number between 1 and 100.');
console.log('You have 5 chances to guess the correct number.');

console.log('Select difficulty level:');
console.log('1. Easy (10 chances)');
console.log('2. Medium (5 chances)');
console.log('3. Hard (3 chances)');

// Use prompt to get user input (in a browser environment)
let choice = parseInt(prompt('Enter your choice: '), 10); // `parseInt` converts the input to an integer

let maxAttempts;
if (choice === 1) {
    console.log('Easy level selected');
    maxAttempts = 10;
} else if (choice === 2) {
    console.log('Medium level selected');
    maxAttempts = 5;
} else if (choice === 3) {
    console.log('Hard level selected');
    maxAttempts = 3;
} else {
    console.log('Invalid choice, defaulting to Medium level');
    maxAttempts = 5;
}

// Generate a random number between 1 and 100
const number = Math.floor(Math.random() * 100) + 1;
let guess = null;
let attempts = 0;

while (guess !== number && attempts < maxAttempts) {
    guess = parseInt(prompt('Enter your guess: '), 10);
    attempts++;

    if (guess < number) {
        console.log('Too low!');
    } else if (guess > number) {
        console.log('Too high!');
    } else if (guess === number) {
        console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
    }

    if (attempts === maxAttempts && guess !== number) {
        console.log('Sorry, you have run out of attempts. The correct number was ' + number);
    }
}
