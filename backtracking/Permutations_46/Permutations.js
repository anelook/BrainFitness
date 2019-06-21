/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = []
    helper(result, [], nums)
    return result
}

const helper = (result, current, nums) => {
    if (current.length === nums.length) {
        result.push(current.slice())
        return
    }
    nums.forEach(num => {
        if (current.includes(num)) {
            return
        }
        current.push(num)
        helper(result, current, nums)
        current.pop()
    })

}