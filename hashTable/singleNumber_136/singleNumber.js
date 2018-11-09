/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

 Note:

 Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

 Example 1:

 Input: [2,2,1]
 Output: 1
 Example 2:

 Input: [4,1,2,1,2]
 Output: 4

 * @param {number[]} nums
 * @return {number}
 * time complexity: O(n)
 * space complexity: O(n)
 */
var singleNumber = function(a) {
    const h = {};
    for (let i=0; i < a.length; i++) {
        h[a[i]] = !h[a[i]]; //set to true when we encounter it first time; set to false when we find it second time
    }

    return + Object.keys(h).find(t=>h[t]); // find item equal to true;
};

var singleNumber = function(a) {
    const h = {};
    for (let i=0; i < a.length; i++) {
        if(h[a[i]]) {
            delete h[a[i]];
        } else {
            h[a[i]] = true;
        }
    }

    return + Object.keys(h)[0];
};

/** using simple math
* time complexity: O(n + n) => O(n)
* space complexity: O(n + n) => O(n)
*/
var singleNumber = function(nums) {
    const sumInd = [...new Set(nums)].reduce((a, n) => a + n, 0); // Set ensures that items are unique
    const sumAll = nums.reduce((a, n) => a + n, 0);

    return 2 * sumInd - sumAll;
};

