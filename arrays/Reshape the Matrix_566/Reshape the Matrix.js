/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    const height = nums.length;
    const width = nums[0].length;
    if (height * width !== r * c) {
        return nums;
    }

    const result = [...Array(r)].map(() => Array(c));
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const count = width * i + j;
            result[~~(count / c)][count % c] = nums[i][j]
        }
    }

    return result;
};