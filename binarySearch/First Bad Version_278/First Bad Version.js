/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n + 1;
        while(left < right) {
            const mid = ~~(left - (left - right)/2);
            const cur = isBadVersion(mid);
            const next = isBadVersion(mid + 1);
            if(!cur && next) {
                return mid + 1;
            }
            if(!cur && !next) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left <= n && isBadVersion(left) === true ? left : -1;

    };
};


var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while(left < right) {
            const mid = ~~(left - (left - right)/2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};