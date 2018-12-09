/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

 Integers in each row are sorted from left to right.
 The first integer of each row is greater than the last integer of the previous row.
 Example 1:

 Input:
 matrix = [
 [1,   3,  5,  7],
 [10, 11, 16, 20],
 [23, 30, 34, 50]
 ]
 target = 3
 Output: true
 Example 2:

 Input:
 matrix = [
 [1,   3,  5,  7],
 [10, 11, 16, 20],
 [23, 30, 34, 50]
 ]
 target = 13
 Output: false
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let top = 0;
    let bottom = matrix.length - 1;

    while(top + 1 < bottom) {
        const mid = ~~(top - (top - bottom)/2);
        if(matrix[mid][0] > target) {
            bottom = mid;
        } else {
            top = mid;
        }
    }

    let row;

    if (target >= matrix[top][0] && target < matrix[bottom][0]) {
        row = top;
    } else if (target >= matrix[bottom][0]) {
        row = bottom;
    } else {
        return false;
    }


    let left = 0;
    let right = matrix[0].length - 1;

    while(left <= right) {
        const mid = ~~(left - (left - right)/2);
        if(matrix[row][mid] === target) {
            return true;
        } else if(matrix[row][mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};

/**
 A bit better solution if we think of the values as a single array, rather than 2 D
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let width = matrix[0].length;
    let height = matrix.length;

    let left = 0;
    let right = width * height - 1;

    while(left <= right) {
        let mid = ~~(left - (left - right)/2);
        if (matrix[~~(mid/width)][mid % width] === target) {
            return true;
        }
        if (matrix[~~(mid/width)][mid % width] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};