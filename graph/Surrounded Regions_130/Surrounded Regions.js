/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


/**DFS*/

const preserve = (r, c, board) => {
    if (r < 0 || c < 0 || r > board.length - 1 || c > board[0].length - 1 || board[r][c] === 'X' ||board[r][c] === '!') {
        return
    }
    board[r][c] = '!';
    preserve(r+1, c, board);
    preserve(r-1, c, board);
    preserve(r, c+1, board);
    preserve(r, c-1, board);

}

var solve = function(board) {
    if(!board || !board.length || !board[0].length) {
        return;
    }
    for (let r = 0; r < board.length; r++) {
        if (board[r][0] === 'O') {
            preserve(r, 0, board)
        }

        if(board[r][board[0].length - 1] === 'O') {
            preserve(r, board[0].length - 1, board);
        }
    }

    for (let c = 1; c < board[0].length - 1; c++) {
        if (board[0][c] === 'O') {
            preserve(0, c, board);
        }
        if (board[board.length - 1][c] === 'O') {
            preserve(board.length - 1, c, board);
        }
    }

    for (let r = 0; r < board.length; r ++) {
        for(let c = 0; c < board[0].length; c ++) {
            board[r][c] = board[r][c] === 'O' ? 'X' : board[r][c];
        }
    }

    for (let r = 0; r < board.length; r ++) {
        for(let c = 0; c < board[0].length; c ++) {
            board[r][c] = board[r][c] === '!' ? 'O': board[r][c];
        }
    }
};

/**BFS*/


const preserve = (row, column, board) => {
    const stack = [[row, column]];

    while (stack.length > 0) {
        const next = stack.pop();
        const r = next[0];
        const c = next[1];
        if (r < 0 || c < 0 || r > board.length - 1 || c > board[0].length - 1 || board[r][c] === 'X' ||board[r][c] === '!') {
            continue;
        }

        board[r][c] = '!';
        stack.push([r + 1, c]);
        stack.push([r - 1, c]);
        stack.push([r, c + 1]);
        stack.push([r, c - 1]);
    }
};