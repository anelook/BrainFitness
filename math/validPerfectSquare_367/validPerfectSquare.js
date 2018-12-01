/**
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.

 Note: Do not use any built-in library function such as sqrt.

 Example 1:

 Input: 16
 Output: true
 Example 2:

 Input: 14
 Output: false
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let min = 0;
    let max = Math.ceil(num/2);
    while(min <= max) {
        const target = Math.ceil((min + max)/2);
        const square = target*target;
        if (square === num){
            return true;
        }
        if (square > num) {
            max = target - 1;
        } else if(square < num) {
            min = target + 1;
        }
    }
    return false;
};