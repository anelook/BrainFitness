
/**
 *
 * Given an array of integers nums, write a method that returns the "pivot" index of this array.

 We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

 If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

 Example 1:
 Input:
 nums = [1, 7, 3, 6, 5, 6]
 Output: 3
 Explanation:
 The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
 Also, 3 is the first index where this occurs.
 Example 2:
 Input:
 nums = [1, 2, 3]
 Output: -1
 Explanation:
 There is no index that satisfies the conditions in the problem statement.
 Note:

 The length of nums will be in the range [0, 10000].
 Each element nums[i] will be an integer in the range [-1000, 1000].

 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length === 0) {
        return -1;
    }
    let pivot = 0;
    let left = 0;
    let right = nums.reduce((acc, v) => acc + v, 0);

    for (let i = 0; i< nums.length; i++) {
        right -= nums[i];
        if(left === right) {
            return i;
        }
        left += nums[i];
    }
    return -1;
};



// my initial failed approach to go through array only once. fails for negative and some other cases
var pivotIndex = function(nums) {
    if(nums.length === 0) {
        return -1;
    }
    let i = 0;
    let j = nums.length - 1;
    let left = right = 0;
    while(i < j) {
        const nextLeft = nums[i+1];
        const nextRight = nums[j-1];
        if(Math.abs(left + nextLeft - right) <= Math.abs(right + nextRight - left)) {
            left += nums[i++];
        } else {
            right += nums[j--];
        }
    }
    return left === right ? i : -1;
};