const dictionary = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };

/**
 * @param {number} value
 * @return {string}
 */

const intToRoman = function(value) {
    let result = '';
    for (i in dictionary) {
        while (value >= dictionary[i]) {
            result += i;
            value -= dictionary[i];
        }
    }
    return result;
};