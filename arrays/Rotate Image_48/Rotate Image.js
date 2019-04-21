/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const length = matrix[0].length;
    for(let layer = 0; layer < length / 2; layer ++) {
        const start = layer;
        const end = length - layer - 1;
        for (let i = start; i < end; i++) {
            const offset = length - 1 - i;
            const temp = matrix[start][i];
            matrix[start][i] = matrix[offset][start]
            matrix[offset][start] = matrix[end][offset]
            matrix[end][offset] = matrix[i][end]
            matrix[i][end] = temp
        }
    }
};