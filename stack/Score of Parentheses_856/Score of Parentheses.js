/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
    let result = 0
    let last
    let depth = 0
    for (let i = 0; i < S.length; i++) {
        if (S[i] === ')' && last === '(') {
            result += Math.pow(2, depth - 1)
        }

        depth += S[i] === '(' ? 1 : -1
        last = S[i]
    }

    return result
}