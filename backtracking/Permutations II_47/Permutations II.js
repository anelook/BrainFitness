/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b)
    const result = []
    helper(result, [], nums, new Array(nums.length).fill(false))
    return result
}

const helper = (result, current, nums, used) => {
    if (current.length === nums.length) {
        result.push(current.slice())
        return
    }
    nums.forEach((num, index) => {
        if (used[index] || (nums[index - 1] === nums[index] && used[index - 1])) {
            return
        }
        used[index] = true
        current.push(num)
        helper(result, current, nums, used)
        current.pop()
        used[index] = false
    })

}