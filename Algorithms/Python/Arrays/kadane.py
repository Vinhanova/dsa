# Max Sub Array Sum

def kadane(nums):
  maxSum = currSum = nums[0]

  for num in nums[1:]:
    currSum = max(num, currSum + num)
    maxSum = max(maxSum, currSum)

  return maxSum


# Test Case:

numsArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(kadane(numsArr))