/**
 * Implement pow(x, n), which calculates x raised to the power n (xn).

 Example 1:

 Input: 2.00000, 10
 Output: 1024.00000
 Example 2:

 Input: 2.10000, 3
 Output: 9.26100
 Example 3:

 Input: 2.00000, -2
 Output: 0.25000
 Explanation: 2-2 = 1/22 = 1/4 = 0.25
 Note:

 -100.0 < x < 100.0
 n is a 32-bit signed integer, within the range [−231, 231 − 1]

 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const rec = (x, n, h) => {
    if(h[n] !== undefined) {
        return h[n];
    }
    if (n === 1) {
        return x;
    }
    if (n === -1) {
        return 1/x;
    }
    const half = ~~(n/2);
    h[half] = rec(x, half, h);
    h[n - half] = rec(x, n - half, h);
    return h[half] * h[n-half];
}
var myPow = function(x, n) {
    if(x === 0 || x === 1) {
        return 1;
    }
    if(n === 0) {
        return 1;
    }
    let h = {};
    return rec(x, n , h);
};

/** removing unnecessary steps*/

var myPow = function(x, n) {
    if(x === 0 || n === 0) { return 1; }
    if (n === 1) { return x; }
    if (n === -1) { return 1/x; }
    if (n % 2 ===0) {
        const t = myPow(x, n/2);
        return t * t;
    }
    return x * myPow(x, n-1)
};


