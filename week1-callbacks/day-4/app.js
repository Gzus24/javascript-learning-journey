// Day 4: Practice with reduce and reduceRight

// Learn how reduce and reduceRight work for accumulating or transforming data.

// Task 1: rebuild reduce

function myReduce(arr, callback){    
    return callback(arr)
 }  
console.log(myReduce([1,3,5,9], function(arr){    
    let sum = 0    
    for(let num of arr){ 
              sum += num    
            }    
    return sum 
}))

// Task 2: Rebuild reduceRight

function myReduceRight(arr, callback){
   return callback(arr)
}

console.log(myReduceRight([[1,3,5,9], [0,2,4,6], [10,11,12, 13]], function(arr){
  let result = [];
   for(let i = arr.length - 1; i >= 0; i--){
      for(let j = arr[i].length - 1; j >= 0; j--){
        result.push(arr[i][j])
      }
   }
  return result
}))