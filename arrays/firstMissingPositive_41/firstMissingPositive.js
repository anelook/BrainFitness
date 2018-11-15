/**
 * Given an unsorted integer array, find the smallest missing positive integer.

 Example 1:

 Input: [1,2,0]
 Output: 3
 Example 2:

 Input: [3,4,-1,1]
 Output: 2
 Example 3:

 Input: [7,8,9,11,12]
 Output: 1
 Note:

 Your algorithm should run in O(n) time and uses constant extra space.
 * @param {number[]} nums
 * @return {number}
 * 1. replace negative values with 0s
 * 2. use values in the array as markers - mark the found values by making value in index-1 position negative
 * 3. if the value in the target position is 0 - replace it with negative value of the value  that won't damage our farther iterations
 * 4. find index of first positive value
 * 5. if all values are there look for max + 1
 *
 * O(n)
 * O(1)
 */
var firstMissingPositive = function(nums) {
    // get rid of negative numbers by replacing them with zeros
    nums.forEach((v, i) => v < 0 ? nums[i] = 0 : 0);
    // use value at (v-1) as a marker if we encountered integer (i + 1).
    // by making targeted value negative
    // for 0s make the value negative of 'v' - to avoid issues in farther iterations
    nums.forEach(v => {
        const val = Math.abs(v);
        if (v !== 0 && nums[val-1] !== undefined && nums[val-1] >= 0)
            nums[val-1] = nums[val-1] === 0 ? - val : - nums[val-1]
    });
    // find index of the first positive value
    // in case of  input as [1,2,3 ] go through array one more time, find the maximum and return max + 1;
    return nums.findIndex(v => v >= 0)  + 1 || Math.abs(nums.reduce((acc, v) => v < acc ? v : acc, 0)) + 1;
};