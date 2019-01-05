/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a - b);
    let closest;

    for(let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while(j < k) {
            const value = nums[i] + nums[j] + nums[k];
            //be careful with undefined vs 0
            closest = closest !== undefined && Math.abs(target - closest) <= Math.abs(target - value) ?
                closest : value;
            if (value === target) {
                return target;
            }
            if (value < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return closest;
};