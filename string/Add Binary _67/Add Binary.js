/**
 * Given two binary strings, return their sum (also a binary string).

 The input strings are both non-empty and contains only characters 1 or 0.

 Example 1:

 Input: a = "11", b = "1"
 Output: "100"
 Example 2:

 Input: a = "1010", b = "1011"
 Output: "10101"
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length > b.length) {
        b = b.padStart(a.length, '0');
    } else {
        a = a.padStart(b.length, '0');
    }

    let remainder = 0;
    let result = [];

    for(let i = a.length - 1; i >= 0; i--) {
        const sum = +a[i] + +b[i] + remainder;
        result.unshift(sum % 2);
        remainder = ~~(sum/2);
    }
    return remainder ? [remainder].concat(result).join('') : result.join('');
};

var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let remainder = 0;
    const result = [];

    while(i>=0 || j>=0 || remainder) {
        const n1 = +a[i] || 0;
        const n2 = +b[i] || 0;
        const sum = n1 + n2 + remainder;
        remainder = ~~ (sum / 2);
        result.unshift(sum % 2);
    }

    return result.join('');
};