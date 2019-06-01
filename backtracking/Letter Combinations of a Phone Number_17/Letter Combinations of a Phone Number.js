/**
 * Time: O(4^n)*O(n)
 * Space: O(4^n)
 * @param {string} digits
 * @return {string[]}
 */
const dictionary = ['_', '_', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

var letterCombinations = function (digits) {
    if (!digits) return []

    const result = [];
    helper(digits, '', result);
    return result
};

const helper = (digits, currentState, result) => {
    if (!digits.length) {
        result.push(currentState)
        return
    }
    dictionary[digits[0]].split('').forEach(letter =>
        helper(digits.slice(1), currentState.concat(letter), result))
}