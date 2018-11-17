/**
 * @param {number} n
 * @return {number}
 * Given an integer n, return the number of trailing zeroes in n!.

 Example 1:

 Input: 3
 Output: 0
 Explanation: 3! = 6, no trailing zero.
 Example 2:

 Input: 5
 Output: 1
 Explanation: 5! = 120, one trailing zero.
 Note: Your solution should be in logarithmic time complexity.
 */
var trailingZeroes = function(n) {
    let sum = 0;
    for (let i = ~~(Math.log(n)/Math.log(5)); i >= 1; i--) { //calculate log of base 5 
        sum += ~~(n / Math.pow(5, i));
    }
    return sum;
};

/* improved */
var trailingZeroes = function(n) {
    let sum = 0;

    while(n > 4) {
        sum += ~~(n/5); // or n/=5)
        n = n/5;
    }
    return sum;
};