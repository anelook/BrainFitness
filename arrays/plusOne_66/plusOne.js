/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

 The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

 You may assume the integer does not contain any leading zero, except the number 0 itself.

 Example 1:

 Input: [1,2,3]
 Output: [1,2,4]
 Explanation: The array represents the integer 123.
 Example 2:

 Input: [4,3,2,1]
 Output: [4,3,2,2]
 Explanation: The array represents the integer 4321.

 * @param {number[]} digits
 * @return {number[]}
 * Time complexity O(1)
 * Space Complexity O(n)
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i = digits.length - 1; i >= 0; i-- ){
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = ~~(sum / 10);
        if (carry === 0) {
            break;
        }
    }

    if (carry) {
        digits.unshift(carry);
    }
    return digits;
};

/** refactored - shorter*/
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

/** when we can have zeros at start and they have to be removed*/
var plusOneStartsWithZeros = function(digits) {
    let deleteCount = 0;
    while(digits[deleteCount] === 0 ) {
        deleteCount++;
    }
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};

/** using transformation to string. does not work for huge numbers
 * Time complexity O(n)
 * Space Complexity  O(n)
 * */
var plusOne = function(digits) {
    return (+ digits.join('') + 1).toString().split('');
};