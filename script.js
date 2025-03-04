/** @format */

// Display a message in the console
console.log("Hello, World!");

// Variables and Data Types
let name = "John"; // String
const age = 25; // Number
let isStudent = true; // Boolean

// Function to greet a user
function greetUser(userName) {
  return "Hello, " + userName + "!";
}

// Calling the function
console.log(greetUser(name));

// Conditional Statement
if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Loop Example
for (let i = 1; i <= 5; i++) {
  console.log("Iteration: " + i);
}

// Object Example
let person = {
  firstName: "Alice",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
console.log("Hellow, World!!");
