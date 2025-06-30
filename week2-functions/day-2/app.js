// Week 2 – Day 2: Functions as Data + Practice

// Task 1: Store functions in an object and call them

const operation = {
   add: function(a, b){return a + b},
   subtract: (a, b)=> a - b
}

console.log(operation.add(4, 7))
console.log(operation.subtract(6, 3))

// Task 2: Store functions in an array and loop over them

const tasks = [
   function(){console.log('step 1')},
   ()=> console.log("step 2"),
   ()=> console.log("step 3")
]

for(let func of tasks){
   func()
}

// Task 3: Use callbacks with DOM (if you're in a browser)

// const btn = document.querySelector('button')

// btn.addEventListener('click', function(){console.log('Button is clicked')})