/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

 Find all the elements that appear twice in this array.

 Could you do it without extra space and in O(n) runtime?

 Example:
 Input:
 [4,3,2,7,8,2,3,1]

 Output:
 [2,3]
 * @param {number[]} nums
 * @return {number[]}
 * Time complexity O(n)
 * Space complexity O(n)
 */
var findDuplicates = function(nums) {
    const h = {};
    for (let i = 0; i < nums.length; i++) {
        h[nums[i]] = !h[nums[i]];
    }

    return Object.keys(h).filter(v => h[v] === false);
};

/**
 * Refactored faster solution. Since 1 ≤ a[i] ≤ n (n = size of array)
 * we can use values in the array as markers if we saw a value already
 * Time complexity O(n)
 * Space complexity O(1)
 */
var findDuplicates = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] >= 0) {
            nums[index] *= -1;
        } else {
            res.push(index + 1);
        }
    }
    return res;
};