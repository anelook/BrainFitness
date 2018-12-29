/*
This algorithm performs slower than BFS and DFS with given LC tests.  Still a valid solution worth knowing

Time complexity:
weighted quick union + path compression - N + M lg*(N)
quick union + path compression  - N+M log(N)

where N = width * height of the array
M - possible number of union-find operations

Space complexity:
O(width * height of the array)

(for more info check first week of the  Algorithms course taught by Robert Sedgewick)
 */

const UnionFind = function(grid) {
    // keep number of all possible islands here
    this.count = 0;

    // our set of trees - forest
    // each entry contains a reference to its parent in the tree
    // each entry in the array has associated with its root
    this.id = []; // id[i] is parent of i

    //we'll use weighted quick union, so we need extra array
    this.sz = []; // which maintains number of items under every root
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j< grid[0].length; j++) {
            if (grid[i][j] === '1') {
                this.count++;
            }
            let num =  grid[0].length * i + j; // give a unique value to every member of id array
            this.id[num] = num;
            this.sz[num] = 1;
        }
    }
}

UnionFind.prototype.root = function(p) {
    while(p !== this.id[p]) {
        // possible path compression
        // I believe in this case we don't need it, our trees will be always flat
        // this.id[p] = this.id[this.id[p]];
        p = this.id[p];
    }
    return p;
};

UnionFind.prototype.union = function(p, q) {
    const pRoot = this.root(p);
    const qRoot = this.root(q);

    if (pRoot === qRoot) {
        return
    }

    this.count--; // that piece of land was already belonging to an island

    // weighted quick union -
    // balance by linking root of smaller tree to root of larger tree
    if(this.sz[pRoot] < this.sz[qRoot]) {
        this.id[pRoot] = qRoot;
        this.sz[qRoot] += this.sz[pRoot];
    } else {
        this.id[qRoot] = pRoot;
        this.sz[pRoot] += this.sz[qRoot];
    }
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    if(!grid || !grid.length || !grid[0].length) {
        return 0;
    }
    const uf = new UnionFind(grid);

    const width = grid[0].length;
    const height = grid.length;
    for(let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if(grid[i][j] === '0') {
                continue;
            }
            let p = i * width + j; // find element in our union find id array
            let q; // find neighboring elements which are equal to 1
            // we check elements on the bottom and to the right only
            // top and left elements were checked in previous iteration
            if(i < height - 1 && grid[i + 1][j] === '1') {
                q = p + width; // bottom element's id === current element's id + length of grid
                uf.union(p, q);
            }
            if(j < width - 1 && grid[i][j + 1] === '1') {
                q = p + 1; // right element's id === current element's id + 1
                uf.union(p, q);
            }
        }
    }

    return uf.count;
};