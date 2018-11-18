/**
 * @param {string} str
 * @return {number}
 * Implement atoi which converts a string to an integer.

 The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

 The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

 If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

 If no valid conversion could be performed, a zero value is returned.

 Note:

 Only the space character ' ' is considered as whitespace character.
 Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 Example 1:

 Input: "42"
 Output: 42
 Example 2:

 Input: "   -42"
 Output: -42
 Explanation: The first non-whitespace character is '-', which is the minus sign.
 Then take as many numerical digits as possible, which gets 42.
 Example 3:

 Input: "4193 with words"
 Output: 4193
 Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
 Example 4:

 Input: "words and 987"
 Output: 0
 Explanation: The first non-whitespace character is 'w', which is not a numerical
 digit or a +/- sign. Therefore no valid conversion could be performed.
 Example 5:

 Input: "-91283472332"
 Output: -2147483648
 Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
 Thefore INT_MIN (−231) is returned.
 */
/**
 * @param {string} str
 * @return {number}
 *
 * my brute force ugly solution:
 */
const isNumber = function(s) {
    return s.match(/[0-9]/);
}

const isSign = function(s) {
    return s.match(/[\-\+]/);
}
const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = - Math.pow(2, 31);

var myAtoi = function(str) {
    let s = str.trim();
    let sign = -1;
    let start = -1;
    let end = -1;
    for (let i = 0; i < s.length; i++) {
        if (isSign(s[i]) && sign === -1 && start === -1) {
            sign = i;
        } else if (isNumber(s[i])) {
            if (start >= 0) {
                end = i;
            } else {
                start = i;
                end = i;
            }
        } else {
            break;
        }
    }
    if (start === -1 || start - sign !== 1) {
        return 0;
    }

    const number = Number(s.slice(sign > -1 ? sign : start, end + 1)) || 0;
    if (number > MAX_INT) {
        return MAX_INT;
    }
    if (number < MIN_INT) {
        return MIN_INT;
    }
    return number;
};

/**refactored using regex*/
const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = - Math.pow(2, 31);
var myAtoi = function(str) {
    var test = /^\s*([\+\-]?[0-9]+)/g.exec(str);
    if (!test) {
        return 0;
    }
    var res = test[test.length - 1];
    if (res > MAX_INT) return MAX_INT;
    if (res < MIN_INT) return MIN_INT;
    return +res;
};