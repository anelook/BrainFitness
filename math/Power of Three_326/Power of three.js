/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return (Math.log(n) / Math.log(3)).toPrecision(12)% 1 === 0;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while(n > 1) {
        n = n/3;
    }
    return n === 1;
};

// while (n>1 && ((n=/3)%3)===0) {}
//     return n === 1