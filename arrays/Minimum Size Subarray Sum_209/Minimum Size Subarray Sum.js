/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let j = 0;
    let i = 0;
    while(j < nums.length) {
        if (sum < s && i < nums.length) {
            sum += nums[i++];
        } else {
            if (sum >= s) {
                min = Math.min(min, i - j);
            }
            sum -= nums[j++];
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};