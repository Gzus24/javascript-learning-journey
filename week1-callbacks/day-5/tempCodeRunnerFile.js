// Day 5: Review + Challenge Problems

// // challenge 1: Recreate .forEach, .map, and .filter — Together

// /*Write a function that accepts:

// An array

// A method type as a string ("forEach", "map", or "filter")

// A callback function

// Depending on the method type, behave like that method using your own logic.
//  */

// function myArrayMethods(arr, method, callback){
//    return callback(arr, method)
// }

// console.log(myArrayMethods([1,2,3],'forEach', function(arr, method){
//    const result = []
//    if(method === 'map'){
      
//       for(let num of arr){
//          result.push(num * 2)
//       }
//       return result
//    }

//    if(method === 'filter'){
      
//       for(let num of arr){
//          if(num % 2 === 0){
//             result.push(num)
//          }
         
//       }
//       return result
//    }

//    if(method === 'forEach'){
//       for(let num of arr){
//          console.log(num)
//       }
//    }
// }))