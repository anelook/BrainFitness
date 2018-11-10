/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [];
    const row = [1];
    for (let i = 0; i < numRows; i++) {
        for (let j = Math.ceil((i+1)/2) - 1; j >= 0; j-- ) { // the triangle is symetrical
            row[j] = row[i - j] = (row[j-1] || 0) + (row[j] || 0);
        }
        triangle.push([...row]);
    }
    return triangle;
};
