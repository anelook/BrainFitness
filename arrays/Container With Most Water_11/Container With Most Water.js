/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0
    let j = height.length - 1
    let max = 0

    while (i < j) {
        const w = j - i
        const h = Math.min(height[i], height[j])
        max = Math.max(max, w * h)

        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }

    return max
}