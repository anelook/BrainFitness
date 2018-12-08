/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

 Your algorithm's runtime complexity must be in the order of O(log n).

 If the target is not found in the array, return [-1, -1].

 Example 1:

 Input: nums = [5,7,7,8,8,10], target = 8
 Output: [3,4]
 Example 2:

 Input: nums = [5,7,7,8,8,10], target = 6
 Output: [-1,-1]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // find end of the range
    while(left + 1 < right) {
        const mid = ~~(left - (left - right) / 2);
        if(nums[mid] <= target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    if(nums[right] !== target && nums[left] !== target) {
        return [-1, -1];
    }
    const end = nums[right] === target ? right : left;

    right = end;
    left = 0;

    // find start of the range
    while(left + 1 < right) {
        const mid = ~~(left - (left - right) / 2);
        if(nums[mid] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    const start = nums[left] === target ? left : right;
    return [start, end]

};
