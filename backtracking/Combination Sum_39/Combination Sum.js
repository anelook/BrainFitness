/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = []
    helper(result, [], target, candidates.sort((a, b) => a - b), 0)
    return result
}

const helper = (result, current, target, candidates, index) => {
    if (target === 0) {
        result.push(current)
        return
    }

    if (candidates[index] > target) {
        return
    }

    for (let i = index; i < candidates.length; i++) {
        helper(result,current.concat(candidates[i]), target - candidates[i], candidates, i)
    }

}
