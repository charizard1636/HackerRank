

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const newArr = nums.map(n => n%2 == 0 ? n*2 : n*3);
    return newArr;

}

/**
Input (stdin)
5
1 2 3 4 5

Expected Output
3 4 9 8 15
**/
