/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const h = {};
    for (let i = 0; i < numbers.length; i++) {
        if(h[numbers[i]] !== undefined) {
            return [h[numbers[i]] + 1, i + 1];
        }
        h[target - numbers[i]] = i;
    }
};

var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while(i< numbers.length && j>=0) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) {
            return [i + 1, j + 1];
        }
        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
};


// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/51287/JavaScript-simple-solution
// var twoSum = function(numbers, target) {
//     var l=numbers.length, i=0, j=l-1;
//     while (numbers[i]+numbers[j] !== target) {
//         numbers[i]+numbers[j] < target ? i++ : j--;
//     }
//     return [i+1, j+1];
// };

//another option is a binary search, but it is less efficient
//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/51268/A-less-efficient-way-(binary-search)