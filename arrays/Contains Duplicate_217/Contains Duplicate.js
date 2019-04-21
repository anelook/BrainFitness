/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};
    let i = 0;
    while(i < nums.length) {
        if (hash[nums[i]]) {
            return true;
        }
        hash[nums[i]] = true;
        i++;
    }

    return false
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a > b);

    for(let i = 0; i< nums.length - 1; i++) {
        if(nums[i] === nums[i+1]) {
            return true
        }
    }

    return false;
};

var containsDuplicate = function(nums) {
    return nums.length > (new Set(nums)).size;
};