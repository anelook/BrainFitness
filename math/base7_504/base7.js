/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let remainder = [];
    const sign = num >= 0 ? '' : '-';
    num = Math.abs(num);
    while(num >=7) {
        const temp = ~~(num/7);
        remainder.unshift(num - temp*7);
        num = temp;
    }
    remainder.unshift(num);
    remainder.unshift(sign);
    return remainder.join('');
};


var convertToBase7 = function(num) {
    let result = '';
    const sign = num >= 0 ? '' : '-';
    num = Math.abs(num);
    while(num >=7) {
        const temp = ~~(num/7);
        result = num - temp*7 + result;
        num = temp;
    }
    return sign + num + result;
};