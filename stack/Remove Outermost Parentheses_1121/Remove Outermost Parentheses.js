/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    const stack = []
    const result = []

    for (let i = 0; i < S.length; i++) {
        if (!stack.length) {
            stack.push(S[i])
            continue
        }

        if (S[i] === ')') {
            stack.pop()
            if (stack.length) {
                result.push(')')
            }
            continue
        }

        result.push('(')
        stack.push(S[i])
    }
    return result.join('')
}

var removeOuterParentheses = function (S) {
    let open = 0
    const result = []

    for (let i = 0; i < S.length; i++) {
        if (open === 0) {
            open++
            continue
        }

        if (S[i] === ')') {
            open--
            if (open > 0) {
                result.push(')')
            }
            continue
        }

        result.push('(')
        open++
    }
    return result.join('')
}