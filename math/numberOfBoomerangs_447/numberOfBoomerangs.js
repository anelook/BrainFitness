/**
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