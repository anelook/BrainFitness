/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const result = new Array(T.length).fill(0)
    const stack = []

    for(let i = 0; i < T.length; i++) {
        while(stack.length && T[stack[stack.length-1]] < T[i]) {
            const j = stack.pop()
            result[j] = i - j
        }

        stack.push(i)
    }

    return result
};