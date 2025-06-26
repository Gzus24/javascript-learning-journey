//  Practice Task 1:
// Write your own forEach function.

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}

myForEach([10, 20, 30], function(value, index) {
  console.log(`Index ${index}: ${value}`)
})

//  Practice Task 2:
// Rebuild map without using .map()

function myMap(arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]))
  }
  return result
}

console.log(myMap([1, 2, 3], (n) => n * 2))

