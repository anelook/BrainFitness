/**
 * Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

 Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

 Example:
 Input:
 [[0,0],[1,0],[2,0]]

 Output:
 2

 Explanation:
 The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    const d = Array.from({length: points.length},v=> []);
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            d[i][j] = d[j][i] =
                (points[i][0] - points[j][0]) * (points[i][0] - points[j][0]) +
                (points[i][1] - points[j][1]) * (points[i][1] - points[j][1]);
        }
    }

    for (let i = 0; i< d.length; i++) {
        for (let j = 0; j < d.length; j++) {
            if(i === j) {
                continue;
            }
            for(let z = 0; z < d.length; z++) {
                if(z === i || z === j) {
                    continue;
                }
                if(d[j][z] === d[i][j]) {
                    result++;
                }
            }
        }
    }return result;
};