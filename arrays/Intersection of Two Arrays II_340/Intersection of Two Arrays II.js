/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Time complexity O(M+N)
 * Space complexity O(M)
 */
var intersect = function (nums1, nums2) {
    const map = {};
    const result = [];
    nums1.forEach(n => {
        map[n] = map[n] ? map[n] + 1 : 1
    });
    nums2.forEach(n => {
        if (map[n]) {
            map[n] = map[n] - 1;
            result.push(n);
        }
    });
    return result;
};