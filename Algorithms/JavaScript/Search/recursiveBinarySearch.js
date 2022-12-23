let arr = [2, 4, 5, 6, 7, 9, 10, 12, 15, 16]
let startIndex = 0
let endIndex = arr.length - 1

function recursiveBinarySearch(arr, startIndex, endIndex, target) {
  if (startIndex > endIndex) return -1 // Base case

  let midIndex = Math.floor((startIndex + endIndex) / 2)

  if (arr[midIndex] === target) return midIndex

  if (arr[midIndex] > target) return recursiveBinarySearch(arr, startIndex, midIndex - 1, target)
  else return recursiveBinarySearch(arr, midIndex + 1, endIndex, target)
}

// Test Cases:

let target1 = 15
console.log(recursiveBinarySearch(arr, startIndex, endIndex, target1)) // returns 8, the index of target

let target2 = 8
console.log(recursiveBinarySearch(arr, startIndex, endIndex, target2)) // returns -1, target not found
