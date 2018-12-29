/**
 * @param {character[][]} grid
 * @return {number}
 */


/***Depth first search***/

const clearLand = function(r, c, grid) {
    if (r < 0 || c < 0 || r > grid.length - 1 || c > grid[0].length - 1 || grid[r][c] === '0') {
        return;
    }

    grid[r][c] = '0';
    clearLand(r, c + 1, grid);
    clearLand(r, c - 1, grid);
    clearLand(r + 1, c, grid);
    clearLand(r - 1, c, grid);

}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || !grid.length || !grid[0].length) {
        return 0;
    }
    let islands = 0
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '1') {
                clearLand(r, c, grid);
                islands++;
            }
        }
    }

    return islands;
};


/***Breadth first search***/

const clearLand = function(row, column, grid) { //
    const stack = [[row,column]];
    while(stack.length > 0) {
        const next = stack.pop();
        const r = next[0];
        const c = next[1];

        if (r < 0 || c < 0 || r > grid.length - 1 || c > grid[0].length - 1 || grid[r][c] === '0') {
            continue;
        }

        grid[r][c] = '0';

        stack.push([r + 1, c]);
        stack.push([r - 1, c]);
        stack.push([r, c + 1]);
        stack.push([r, c - 1]);
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || !grid.length || !grid[0].length) {
        return 0;
    }
    let islands = 0
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '1') {
                clearLand(r, c, grid);
                islands++;
            }
        }
    }

    return islands;
};