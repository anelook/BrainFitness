/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

 If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

 The replacement must be in-place and use only constant extra memory.

 Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1

 https://www.nayuki.io/page/next-lexicographical-permutation-algorithm

 Steps:
 1. find longest non-increasing sequence and pivot in front of it
 2. find rightmost successor to the pivot
 3. Swap them
 3. Reverse the suffix

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 1. find pivot
    let p = null;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            p = i;
            break;
        }
    }
    // if this is the last permutation - reverse the string and return it
    if (p === null) {
        nums.reverse();
        return;
    }

    // find successor
    let s = null;
    for(let i = nums.length - 1; i > p; i--) {
        if(s !== null) {
            s = nums[i] < nums[s] && nums[i] > nums[p] ? i : s;
        } else {
            s = nums[i] > nums[p] ? i : s;
        }
    }

    //swap
    let tmp = nums[p];
    nums[p] = nums[s];
    nums[s] = tmp;

    //reverse suffix
    for (let i = p + 1; i <= ~~((nums.length - p)/2 + p); i++) {
        tmp = nums[i];
        nums[i] = nums[nums.length + p - i];
        nums[nums.length + p - i] = tmp;
    }
};