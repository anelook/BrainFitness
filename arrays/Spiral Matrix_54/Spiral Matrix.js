/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return matrix;
    }
    const result = [];
    const H = matrix.length;
    const W = matrix[0].length;
    const seen = [...Array(H)].map(e => Array(W));
    const directionRow = [0, 1, 0, -1];
    const directionColumn = [1, 0, -1, 0];
    let directionRowI = 0;
    let directionColumnI = 0;
    let r = 0;
    let c = 0;
    for (let i = 0; i < H * W; i++) {
        result.push(matrix[r][c]);
        seen[r][c] = true;

        const nextR = r + directionRow[directionRowI];
        const nextC = c + directionColumn[directionColumnI];
        if (nextR >= 0 && nextR < H && nextC >= 0 && nextC < W
            && !seen[nextR][nextC]) {
            r = nextR;
            c = nextC;
        } else {
            directionRowI = (directionRowI + 1) % 4;
            directionColumnI = (directionColumnI + 1) % 4;
            r = r + directionRow[directionRowI];
            c = c + directionColumn[directionColumnI];
        }
    }

    return result;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return matrix;
    }
    let result = [];
    const H = matrix.length;
    const W = matrix[0].length;

    let rs = 0;
    let re = H - 1;

    let cs = 0;
    let ce = W - 1;

    while (rs <= re && cs <= ce) {
        for (let i = cs; i <= ce; i++) {
            result.push(matrix[rs][i])
        }
        for (let i = rs + 1; i <= re; i++) {
            result.push(matrix[i][ce])
        }
        if (rs < re && cs < ce) {
            for (let i = ce - 1; i > cs; i--) {
                result.push(matrix[re][i])
            }
            for (let i = re; i > rs; i--) {
                result.push(matrix[i][cs])
            }

        }
        rs++;
        re--;
        cs++;
        ce--;
    }
    return result;
};