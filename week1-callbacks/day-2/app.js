// Day 2: Callback Function Deep Dive (Intermediate Practice)

// task 1: 
// Create your own version of the filter method.
// It should take an array and a callback function, and return a 
// new array with only the elements that return true from the callback.

function myFilter(arr, callback){
   return callback(arr)
}

console.log(myFilter([1, 2, 3, 4, 5], (arr)=>{
   const filterdArr = []

   for(let num of arr){
      if(num % 2 === 0){
         filterdArr.push(num)
      }
   }
   return filterdArr
}))

// task 2:
// Write a function that mimics the behavior of Array.prototype.every()
// It should return true only if every element satisfies the condition.

 function isOdd(value){
   return value % 2 !== 0
}

function myEveryMethod(arr, callback){
   return callback(arr)
}

console.log(myEveryMethod([1,3,5], function(arr){
  for(let num of arr){
   if(!isOdd(num)){
      return false
   }
  }
  return true
}))