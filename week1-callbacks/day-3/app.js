// Day 3: Intermediate Callback Applications

/* 🔹 Task 1: Custom some Method

Write a mySome(arr, callback) that returns true if at least one element passes the test.

🔹 Task 2: Rebuild find

Write a myFind(arr, callback) that returns the first element that matches a condition.

🔹 Optional Challenge:

Try writing myFindIndex(arr, callback) to return the index of the first element that passes.*/

// Task 1:

function isOdd(value){
   return value % 2 !== 0
}

function mySomeMethod(arr, callback){
   return callback(arr, isOdd)
}

console.log(mySomeMethod([1,3,5,8], function(arr,func){
  for(let num of arr){
   if(func(num)){
      return true
   }
  }
  return false
}))

// task 2:

function myFindMethod(arr, callback){
   return callback(arr)
}

console.log(myFindMethod([1,3,5, 9], function(arr){
  for(let num of arr){
   if(num > 7){
      return num
   }
  }

}))

// Bonus Task:

function myFindIndexMethod(arr, callback){
   return callback(arr)
}

console.log(myFindIndexMethod([1,3,5, 9], function(arr){
  for(let i = 0; i < arr.length; i++){
   if(arr[i] > 7){
      return i
   }
  }
}))