// Week 3 – Day 1: Function Scope & Closure

/*Task 1: Understanding Scope
Create three functions to demonstrate:

A variable in global scope.

A variable in a function scope.

A variable in a block scope (use let or const inside an if or for block).

Add console.log statements to show which variables are accessible where. */

let greetings = "Hello"

function greet(){
    console.log(`using a global variable: ${greetings}`)
    console.log(`${greetings}, my name is Jesus`)
}
  greet()

function addOne(){
    let num = 0
    num++
    console.log(`the variable num can only be accessed inside this function. num = ${num}`)
}
addOne()

function countTOFive(){
    for(let i = 1; i <= 5; i++){
        console.log(`${i} mississippi`)
    }
    console.log('i can only be accessed inside the for loop')
}
countTOFive()

/*  Task 2: Create a Closure
Write a function called counter() that:

Returns another function.

The inner function should increment and return a number each time it’s called.*/

function counter(){
    let increase = 0
    return ()=>{
        increase++
        return increase
    }
}

const count = counter()

console.log(count())
console.log(count())
console.log(count())

/*Task 3: Make a Private Score Tracker
Build a function called scoreTracker() that:

Uses a variable to track the score privately.

Returns two inner functions: one to add points and one to get the current score. */

function scoreTracker(){
    let score = 0;
    
        return  {
            
            add: function(num){
                score += num
            },
            get: function(){
                console.log(score)
            }
        }
    
}

const myScore = scoreTracker()

myScore.add(2)
myScore.add(2)

myScore.get()
