/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

 Example 1:

 Input:
 [
 [1,1,1],
 [1,0,1],
 [1,1,1]
 ]
 Output:
 [
 [1,0,1],
 [0,0,0],
 [1,0,1]
 ]
 Example 2:

 Input:
 [
 [0,1,2,0],
 [3,4,5,2],
 [1,3,1,5]
 ]
 Output:
 [
 [0,0,0,0],
 [0,4,5,0],
 [0,3,1,0]
 ]
 Follow up:

 A straight forward solution using O(mn) space is probably a bad idea.
 A simple improvement uses O(m + n) space, but still not the best solution.
 Could you devise a constant space solution?
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Time complexity O(N*M)
 * SpaceComplexity O(1)
 */
var setZeroes = function(matrix) {
    let firstColumnZeros = matrix.some(row => row[0] === 0);
    let firstRowZeros = matrix[0].some(item => item === 0);

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i< matrix.length; i++) {
        if (matrix[i][0] === 0) {
            for(let j = 1; j < matrix[0].length; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            for(let i = 1; i< matrix.length; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] === 0 || firstColumnZeros) {
        for (let i = 1; i< matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }

    if (matrix[0][0] === 0 || firstRowZeros) {
        for (let j = 1; j< matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }

    if(firstRowZeros || firstColumnZeros) {
        matrix[0][0] = 0;
    }

};

/*
* refactored solution to use JS features
* */
var setZeroes = function(matrix) {
    const topRowAreZeros = matrix[0].some(v => v === 0);

    for (let i = 1; i < matrix.length; i++) {
        matrix[i].every(_ => _) || matrix[i].forEach((v, j) => matrix[ v ? i : 0] [j] = 0)
    }

    matrix[0].forEach((v, j) => v || matrix.forEach((_, i) => matrix [i][j] = 0) );

    if (topRowAreZeros) {
        matrix[0].forEach((v,j) => matrix[0][j] = 0);
    }
};