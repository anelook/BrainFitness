/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 Example:

 Input: [0,1,0,3,12]
 Output: [1,3,12,0,0]
 Note:

 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(a) {
    let t = 0;
    for (let i=0; i < a.length; i++) {
        if (a[i] === 0) {
            a.splice(i,1); // this shifts all elements. depends on implementation but can be O(n)
            t++;
            i--; //uuuugly!
        }
    }
    a.push(...new Array(t).fill(0)); //bringing back all zeros
};

/* two pointers approach; faster, cleaner, does not rely on splice and fill */
/* time - O(n), space - O(1)*/
var moveZeroes = function(nums) {
    let p = 0; //lastNonZeroFoundAt
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[p] = nums[i];
            p++;
        }
    }
    for (let i = p; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/* moving non-zero elements and appending zeros to the end within one loop*/
var moveZeroes = function(nums) {
    for (let i = 0, j = 0; i < nums.length; i++) { // j => lastNonZeroFoundAt
        if (nums[i]) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
};