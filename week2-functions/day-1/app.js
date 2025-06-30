// Day 1: Pure Functions, Side Effects, and First-Class Functions

/*  Goal:
Understand what makes a function pure, how side effects affect your code,
and why functions being first-class is a game-changer. 


Task 1 – Pure vs Impure Function
Write two functions:

One that’s pure (e.g. multiplies two numbers)

One that’s impure (e.g. updates a global variable or logs something)

*/

// 1. Pure function

function add(a, b){
   return a + b;
}
console.log(add(2,5));

// 2. Impure function

let isBlue;

function favColor(color){
   if(color.toLowerCase() === 'blue'){
      isBlue = true;
   }else{
      isBlue = false;
   }

   console.log(isBlue);
}

favColor('Blue');


/* Task 2 – First-Class Functions
Create a function that:

Accepts another function as an argument

Logs a message before and after the callback is run: 
Then pass in different kinds of callbacks (logging, math, etc.)
 and observe how flexible it is.*/

//  function runWithLogging(callback){
//    console.log("Start")
//    callback()
//    console.log("End")
// }
// runWithLogging(function(){
//    console.log("Task starting...")
//    console.log("task done.")
// })

function runWithLogging(a, b, callback){
   console.log("Start")
   callback(a, b)
   console.log("End")
}
runWithLogging(3, 5, function(a, b){
   console.log(`${a} plus ${b} equals ?`)
   console.log(a + b)
})