/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        let addition = target - nums[i];
        if (addition in hash) {
            return [hash[addition], i];
        }
        hash[nums[i]] = i;
    }
};