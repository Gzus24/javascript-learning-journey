// Day 4 : Strengthen understanding of how callbacks help us write flexible, 
// reusable logic in real-world functions.

/* Task 1: Flexible Math Function
Challenge: Write a function doMath that takes two numbers and a callback.
The callback should decide what operation to do (add, subtract, etc.). */

function doMath(a, b, callback){
  return callback(a, b)
}

console.log(doMath(4,2, function(a, b){
  return a + b
  // return a * b
  // return a - b
}))

/* Task 2: Custom Sort with Callback
Write your own version of a sort function using
 a callback to determine the order. */
 
function mySort(arr, callback){
  for(let i = 0; i < arr.length - 1; i++){
    let temp;
    if(callback(arr[i], arr[i + 1]) >= 0){
      temp = arr[i + 1];
      arr[i + 1] = arr[i]
      arr[i] = temp
      i = -1
    }
  }
  return arr
}

console.log(mySort([2,45,7,1], function(a, b){
  return a - b
}))