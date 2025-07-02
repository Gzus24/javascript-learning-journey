// Day 3: Intro to Higher-Order Functions (HoFs)

//  Task 1: Identify Higher-Order Functions
// Instructions: For each function below, decide:

// Is it a higher-order function?

// Why or why not?

function greet(name) {
  return `Hello, ${name}`
}

function loudGreet(name, formatter) {
  return formatter(name.toUpperCase())
}

function formatGreeting(name) {
  return `** ${name} **`
}

/* task 1
a high order function is a function that takes or returns a function.

greet() and formatGreeting() are not higher order functions
loudGreet() is since its returning a function


Task 2: Create Your Own HoF
Goal: Write a function called withLogging that:

Takes a callback as a parameter.

Runs the callback.

Logs before and after.

*/

function withLogging(callback) {
   console.log("Call your callback")
   callback()
 }
 
 withLogging(() => {
   console.log("This is my callback.")
 })