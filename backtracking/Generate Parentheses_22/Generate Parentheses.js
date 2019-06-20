/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = []
    helper(result, '', n, n, 0)
    return result
}

const helper = function (result, current, leftOpened, leftClosed, toClose) {
    if (!leftOpened, !leftClosed) {
        result.push(current)
        return
    }

    if (leftOpened) {
        helper(result, current + '(', leftOpened - 1, leftClosed, toClose + 1)
    }

    if (leftClosed && toClose > 0) {
        helper(result, current + ')', leftOpened, leftClosed - 1, toClose - 1)
    }
}