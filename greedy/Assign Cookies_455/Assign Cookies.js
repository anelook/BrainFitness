/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (greediness, cookies) {
    let i = 0
    let j = 0
    let result = 0

    greediness.sort((a, b) => a - b)
    cookies.sort((a, b) => a - b)

    while (i < greediness.length && j < cookies.length) {
        if (greediness[i] <= cookies[j]) {
            result++
            i++
        }
        j++
    }
    return result
}