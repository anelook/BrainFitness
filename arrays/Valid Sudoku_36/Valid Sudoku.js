/**
 * Using a set for each row/column/block
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
    for (let i = 0; i < 9; i++) {
        if (isNotValidRow(board[i]) || isNotValidRow(board.map(v => v[i]))) {
            return false
        }
    }
    for (let i = 0; i < 9; i = i + 3) {
        for (let j = 0; j < 9; j = j + 3) {
            const row = [
                board[i][j], board[i + 1][j], board[i + 2][j],
                board[i][j + 1], board[i + 1][j + 1], board[i + 2][j + 1],
                board[i][j + 2], board[i + 1][j + 2], board[i + 2][j + 2]
            ]
            if (isNotValidRow(row)) {
                return false
            }
        }
    }
    return true;
}

const isNotValidRow = row => {
    const r = row.filter(v => v !== '.')
    return (new Set(r)).size !== r.length
}

/**
 * Using a single set
 * stole idea from here https://leetcode.com/problems/valid-sudoku/discuss/15472/Short%2BSimple-Java-using-Strings
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value !== '.') {
                if (seen.has(value + " in row " + i) ||
                    seen.has(value + " in column " + j) ||
                    seen.has(value + " in block " + ~~(i / 3) + "-" + ~~(j / 3))) {
                    return false;
                }
                seen.add(value + " in row " + i)
                seen.add(value + " in column " + j)
                seen.add(value + " in block " + ~~(i / 3) + "-" +~~(j / 3))
            }

        }
    }
    return true;
}
