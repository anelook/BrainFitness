/**
 * Given a list of non negative integers, arrange them such that they form the largest number.

 Example 1:

 Input: [10,2]
 Output: "210"
 Example 2:

 Input: [3,30,34,5,9]
 Output: "9534330"
 Note: The result may be very large, so you need to return a string instead of an integer.


 * @param {number[]} nums
 * @return {string}
 */
/**
 * Given a list of non negative integers, arrange them such that they form the largest number.

 Example 1:

 Input: [10,2]
 Output: "210"
 Example 2:

 Input: [3,30,34,5,9]
 Output: "9534330"
 Note: The result may be very large, so you need to return a string instead of an integer.
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((n1, n2) => {
        let s1 = n1.toString();
        let s2 = n2.toString();
        const l1 = s1.length;
        const l2 = s2.length;
        if (l1 === l2) {
            return n2 - n1;
        }
        if (l1 > l2) {
            s2 = s2.padEnd(l1, Math.max(s2[0], s2.slice(-1))); //transforming 83 ? 839 => 828  ? 839
            return (+s2) - n1;
        }
        if (l1 < l2) {
            s1 = s1.padEnd(l2, Math.max(s1[0],s1.slice(-1)));
            return n2 - (+s1);
        }
    });
    return nums[0] ? nums.join('') : '0';
};

/** refactored
 * there is no need to padEnd and overthink which number is better to go first
 * just compare what is bigger ab or ba */
var largestNumber = function(nums) {
    const strs = nums.map(n => n.toString()).sort((n1, n2) => Number(n2 + n1) - Number(n1 + n2));
    return strs[0] === '0' ? '0' : strs.join('');
};