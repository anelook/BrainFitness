/**
 * without sort
 * O(n^2) + O(n^2 * n^2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const result = {};
    const twoSumsMap = {};
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (twoSumsMap[sum]) {
                twoSumsMap[sum].push([i, j])
            } else {
                twoSumsMap[sum] = [[i, j]]
            }
        }
    }

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const partialSum = target - nums[i] - nums[j];
            if (twoSumsMap[partialSum]) {
                twoSumsMap[partialSum].forEach(val => {
                    if (i !== val[0] && j !== val[1] && i !== val[1] && j !== val[0]) {
                        const combination = [nums[i], nums[j], nums[val[0]], nums[val[1]]].sort((a, b) => a - b);
                        result[combination.toString()] = combination;
                    }
                })
            }
        }
    }
    return Object.values(result);
};


/**
 * O(n^3) ?
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const result = [];
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            
            let start = j + 1;
            let end = nums.length - 1
            while (start < end) {
                const sum = nums[i] + nums[j] + nums[start] + nums[end];
                if (target === sum) {
                    result.push([nums[i], nums[j], nums[start], nums[end]])
                    while (start < end && nums[start] === nums[start + 1]) start++
                    while (start < end && nums[end] === nums[end - 1]) end--

                    start++
                    end--
                }
                else if (target < sum) {
                    end--
                } else {
                    start++
                }
            }
        }
    }
    return result;
};
