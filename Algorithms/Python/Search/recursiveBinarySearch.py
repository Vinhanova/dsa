import math

arr = [1, 4, 6, 7, 12, 32, 47, 54, 324]
startIndex = 0
endIndex = len(arr) - 1

def binarySearch(arr, startIndex, endIndex, target):
  if(startIndex > endIndex): return -1

  midIndex = math.floor((startIndex + endIndex) / 2)

  if(target == arr[midIndex]): return midIndex
  if(target < arr[midIndex]): return binarySearch(arr, startIndex, midIndex - 1, target)
  else: return binarySearch(arr, midIndex + 1, endIndex, target)

# Test Cases:

target1 = int(3)
print(binarySearch(arr, startIndex, endIndex, target1)) # returns -1, target not found

target2 = int(47)
print(binarySearch(arr, startIndex, endIndex, target2)) # returns 6, the index of target