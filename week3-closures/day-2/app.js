// Week 3 – Day 2: lexical scope, block vs function scope

/* Task 1: Lexical Scope in Action*/

function outer() {
    let message = "Hello from outer";
    
    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();
greet(); // What will this log?

/*1. it will log the message variable.
2. inner can access message because both the variable and the inner function are within the outer function. */

/* Task 2: Block Scope vs Function Scope
Fill in the blanks:

let and const are ________ scoped

var is ________ scoped

Predict what this code will log, then run it: */

// 1. let and const are blocked scoped
// 2. It's function scoped — it escapes block scopes (like if), but stays inside function scopes.

// Predict what this code will log, then run it:
function testScope() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log(x); // ?
    console.log(y); // ?
    console.log(z); // ?
}

testScope();

//3. both const and let in this case are block scopes and can only be accessed inside the if statement. 
// while the var variable is global because of var and can be accessed from anywhere.

/*Task 3: Closure + Scope Combo
Create a makeCounter(start) function that returns an object with two methods:

increment(): increases the counter by 1

getCount(): returns the current count */

function makeCounter(start){
 
    return {
        increment: ()=>{
            start++
        },
        getCount: function(){
            console.log(start)
        }
    }
}

const counterA = makeCounter(5)

counterA.increment()
counterA.increment()
counterA.increment()
counterA.increment()
counterA.getCount()