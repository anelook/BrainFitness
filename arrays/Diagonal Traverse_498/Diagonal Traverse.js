function isPresent(m, i, j) {
    return i >= 0 && i < m.length && j >= 0 && j < m[0].length;
}
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(!matrix.length || !matrix[0].length) {
        return [];
    }
    let state = 1;
    let i = 0;
    let j = 0;
    let result = [matrix[0][0]];

    while(true) {
        if (state === 1) {
            if (isPresent(matrix, i, j + 1)) {
                result.push(matrix[i][++j]);
                state ++;
                continue;
            }
            if (isPresent(matrix, i + 1, j)) {
                result.push(matrix[++i][j]);
                state ++;
                continue;
            }
            break;
        }
        if (state === 2) {
            if(isPresent(matrix, i + 1, j - 1)) {
                result.push(matrix[++i][--j]);
            } else {
                state ++;
            }
            continue;
        }
        if (state === 3) {
            if (isPresent(matrix, i + 1, j)) {
                result.push(matrix[++i][j]);
                state ++;
                continue;
            }
            if (isPresent(matrix, i, j + 1)) {
                result.push(matrix[i][++j]);
                state ++;
                continue;
            }
            break;
        }
        if (state === 4) {
            if(isPresent(matrix, i - 1, j + 1)) {
                result.push(matrix[--i][++j]);
            } else {
                state = (state + 1) % 4;
            }
            continue;
        }
    }

    return result;
};