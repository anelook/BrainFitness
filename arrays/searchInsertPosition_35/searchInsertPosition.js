/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 You may assume no duplicates in the array.

 Example 1:

 Input: [1,3,5,6], 5
 Output: 2
 Example 2:

 Input: [1,3,5,6], 2
 Output: 1
 Example 3:

 Input: [1,3,5,6], 7
 Output: 4
 Example 4:

 Input: [1,3,5,6], 0
 Output: 0
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length) {
        return 0;
    }
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[nums.length -1]) {
        return nums.length;
    }

    let n1 = 0;
    let n2 = nums.length - 1;

    while(n2-n1 > 1) {
        const curr = ~~((n1+n2)/2);
        const val = nums[curr];
        if (val > target) {
            n2 = curr;
        } else if(val < target) {
            n1 = curr;
        } else {
            return curr;
        }
    }
    return nums[n1] === target ? n1 : n2;
};

/* improved */
var searchInsert = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while(lo < hi) {
        const mid = ~~(lo + (hi - lo)/2);
        if (nums[mid] < target) {
            lo = mid + 1;
        } else if(nums[mid] > target) {
            hi = mid - 1; //covers case when the target is smaller than the first element
        } else {
            return mid;
        }
    }
    // covers edge case of
    // single element
    // and if new element is bigger than the last one in the array
    return nums[lo] < target ? lo + 1 : lo;
};


/* improved 2. to overcpme the edge case of target bigger then last element, we can just iterate one more time  */
var searchInsert = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while(lo <= hi) {
        const mid = ~~(lo + (hi - lo)/2);
        if (nums[mid] < target) {
            lo = mid + 1;
        } else if(nums[mid] > target) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }

    return lo;
};

