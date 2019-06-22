/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate
    let counter = 0
    nums.forEach(num => {
        if (candidate === num) {
            counter++
            return
        }
        if (counter === 0) {
            candidate = num
            return
        }
        counter--

    })

    return candidate
}