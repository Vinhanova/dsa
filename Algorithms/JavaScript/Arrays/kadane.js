// Max Sub Array Sum

var kadane = function (numsArr) {
  maxSum = currSum = numsArr[0]

  for (let i = 1; i < numsArr.length; i++) {
    currSum = Math.max(numsArr[i], currSum + numsArr[i])
    maxSum = Math.max(maxSum, currSum)
  }

  return maxSum
}

// Test Case:

numsArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(kadane(numsArr))
