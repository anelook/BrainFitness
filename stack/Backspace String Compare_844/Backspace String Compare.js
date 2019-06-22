/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    return processString(S) === processString(T)
}

const processString = (string) => {
    const stack = []

    for(let i=0; i< string.length; i++) {
        if (string[i] === '#') {
            stack.pop()
        } else {
            stack.push(string[i])
        }
    }

    return stack.join('')
}