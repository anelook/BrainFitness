/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    let opened = 0
    let counter = 0

    for (let i = 0; i < S.length; i++) {
        if (S[i] === ')' && opened > 0) {
            opened--
            counter--
            continue
        }

        if (S[i] === '(') {
            opened++
        }
        counter++
    }

    return counter
}

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    const stack = []
    let counter = 0

    for (let i = 0; i < S.length; i++) {
        if (!stack.length) {
            stack.push(S[i])
            counter++
            continue
        }

        if (S[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
            counter--
        } else {
            stack.push(S[i])
            counter++
        }
    }

    return counter
}