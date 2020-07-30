

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var largest = nums[0];
    var secondLargest = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        }
        else if (nums[i] > secondLargest && nums[i] != largest)
            secondLargest = nums[i];
    }
    return secondLargest;
}

/**
Input (stdin)
5
2 3 6 6 5

Expected Output
5
**/
