/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

 Note:

 The length of both num1 and num2 is < 5100.
 Both num1 and num2 contains only digits 0-9.
 Both num1 and num2 does not contain any leading zero.
 You must not use any built-in BigInteger library or convert the inputs to integer directly.

 * @param {string} num1
 * @param {string} num2
 * @return {string}
 '', '' => ''
 '1', '1' => '2'
 '11', '1' => '11', '01' => '12'
 '19', '1' => '19', '01' => '20'
 '9', '1' => '10'
 '1', '1'
 */
var addStrings = function(num1, num2) {
    const maxLength = Math.max(num1.length, num2.length);
    const n1 = num1.padStart(maxLength, '0');
    const n2 = num2.padStart(maxLength, '0');

    let res = [];
    let remainder = 0;
    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = +n1[i] + +n2[i] + remainder;
        res.unshift(sum%10);
        remainder = ~~(sum/10);
    }

    if (remainder > 0) {
        res.unshift(remainder);
    }
    return res.join('');
};

/**looking for faster solution*/
var addStrings = function(num1, num2) {
    const maxLength = Math.max(num1.length, num2.length) - 1;
    let res = '';
    let remainder = 0;
    for (let i = maxLength, k = num1.length - 1, m = num2.length - 1; i >= 0; i--, m--, k--) {
        const sum = +(num1[k]||0) + +(num2[m]||0) + remainder;
        res = `${sum%10}${res}`;
        remainder = ~~(sum/10);
    }

    if (remainder > 0) {
        res = `${remainder}${res}`;
    }
    return res;
};

var addStrings = function(num1, num2) {
    let res = '';
    let remainder = 0;
    let k = num1.length - 1;
    let m = num2.length - 1;
    while(k > 0 || m > 0 || remainder > 0) {
        const sum = +(num1[k]||0) + +(num2[m]||0) + remainder;
        res = `${sum%10}${res}`;
        remainder = ~~(sum/10);
        k--; m--;
    }
    return res;
};

/**fastest */
var addStrings = function(num1, num2) {
    let res = '';
    let remainder = 0;
    let k = num1.length - 1;
    let m = num2.length - 1;
    while(k >= 0 || m >= 0 || remainder > 0) {
        let sum = remainder;
        if (k >= 0){
            sum += +num1[k];
            k--;
        }
        if (m >= 0){
            sum += +num2[m];
            m--;
        }
        res = `${sum%10}${res}`;
        remainder = ~~(sum/10);
    }
    return res;
};


