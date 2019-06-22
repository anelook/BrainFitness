/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    const result = []
    for (let i = 0; i < S.length; i++) {
        const nextToAdd = S[i]
        const lastAdded = result[result.length - 1]
        if (lastAdded === nextToAdd) {
            result.pop()
        } else {
            result.push(nextToAdd)
        }
    }

    return result.join('')
}


/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    result = []
    for (let i of S) {
        if (result[result.length - 1] === i) {
            result.pop()
        } else {
            result.push(i)
        }
    }
    return result.join("")
}