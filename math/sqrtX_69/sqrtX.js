
/**
 * Newton
 * https://leetcode.com/problems/sqrtx/discuss/25057/3-4-short-lines-integer-newton-every-language
 * O(logx)
 * @param {number} x
 * @return {number}
 */
var mySqrtNewton = function(x) {
    let r = x;
    while (r*r > x)
        r = ~~((r + x/r) / 2);
    return r;
};

/**
 * Binary search
 * https://leetcode.com/problems/sqrtx/discuss/25047/a-binary-search-solution
 * O(logx)
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) { // to avoid mid = 0;
        return x;
    }
    let lo = 1;
    let hi = x;
    while (lo < hi) {
        //~~ - faster than Math.floor
        const mid = ~~(lo + (hi - lo)/2); //same as (hi + lo)/2; to avoid overflow
        if (mid <= x/mid) { //same as mid*mid<=x , but to avoid overflow
           lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo - 1;
};