/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let biggest = 0;
    let second = 0;
    let index;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > biggest) {
            second = Math.max(second, biggest);
            biggest = nums[i];
            index = i;
        } else {
            second = Math.max(second, nums[i]);
        }
    }

    return biggest && biggest >= second * 2 ? index : -1;
};


// I also liked this one - https://leetcode.com/problems/largest-number-at-least-twice-of-others/discuss/147043/Javascript-Without-your-own-for-loop
var dominantIndex = function(nums) {

    // Get the max of the array
    let max = Math.max(...nums)
    let maxIndex = nums.indexOf(max);

    // Replace the max element in the array with -Infinity
    nums[maxIndex] = -Infinity;

    // Get the second highest maximum
    let secondMax = Math.max(...nums)

    // Return index of max if twice that or secondMax otherwise return -1
    return (max >= 2*secondMax) ? maxIndex : -1
};