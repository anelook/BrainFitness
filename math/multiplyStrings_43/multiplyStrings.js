/**
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

 Example 1:

 Input: num1 = "2", num2 = "3"
 Output: "6"
 Example 2:

 Input: num1 = "123", num2 = "456"
 Output: "56088"
 Note:

 The length of both num1 and num2 is < 110.
 Both num1 and num2 contain only digits 0-9.
 Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 You must not use any built-in BigInteger library or convert the inputs to integer directly.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 * My initial awful, long and slow solution:
 */
const multiplyOne = (a, m, z) => {
    let remainder = 0;
    let result = [];
    let i = a.length - 1;
    while( i >= 0 || remainder > 0) {
        let mult = remainder;
        if(i >= 0) {
            mult +=(a[i] || 0) * m;
        }
        remainder = ~~(mult/10);
        result.unshift(mult%10);
        i--;
    }
    for(; z>0;z--){
        result.push(0);
    }
    return result;
}

const sum = (a) => {
    let remainder = 0;
    let result = [];
    const max = a[a.length - 1].length;

    for(let i = a[a.length - 1].length - 1; i >= 0; i--){
        let sum = 0;

        for(let j=0; j < a.length; j++)  {
            const diff =  max - a[j].length;
            sum += a[j][i-diff] || 0;
        }
        sum += remainder;
        result.unshift(sum%10);
        remainder = ~~(sum/10);
    }
    if(remainder > 0) {
        result.unshift(remainder);
    }
    return result;
}

var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') {
        return '0';
    }

    const multiplied = [];
    for(let i = num1.length - 1; i >= 0; i--) {
        multiplied.push(multiplyOne(num2, num1[i], num1.length -1 -i));
    }
    return sum(multiplied).join('');
};



/** Refactored and simplified ****/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * https://leetcode.com/problems/multiply-strings/discuss/17605/Easiest-JAVA-Solution-with-Graph-Explanation
 */
var multiply = function(num1, num2) {
    const res = Array.from({length: num1.length + num2.length}, v => 0);
    for(let i = num1.length - 1; i >= 0; i--) {
        for(let j = num2.length - 1; j >= 0; j--) {
            const mult = res[i + j + 1] + num1[i] * num2[j];
            res[i + j + 1] = mult % 10;
            res[i + j] += ~~(mult / 10);
        }
    }

    while (!res[0] && res.length > 1) {
        res.shift();
    }
    return res.join('');
};

