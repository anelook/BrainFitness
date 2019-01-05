/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

 Note:

 The solution set must not contain duplicate triplets.

 Example:

 Given array nums = [-1, 0, 1, 2, -1, -4],

 A solution set is:
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]
 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //note: sort without comparer function will not work as expected
    nums = nums = nums.sort((a, b) => a - b);
    const result = [];

    // iterate till nums.length - 2 because we need 3 elements
    for(let i = 0; i < nums.length - 2; i++) {
        //if we already used same number as first value, skip it,
        // we won't get anything new
        if (nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;
        while(j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if(sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                // skip duplicates
                while(nums[j] === nums[j - 1] ) {
                    j++;
                }
                while(nums[k] === nums[k + 1]) {
                    k--;
                }

                continue;
            }
            if(sum < 0) {
                j ++;
            } else {
                k --;
            }
        }
    }
    return result;
};