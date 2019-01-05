/**
 * @param {number[]} nums
 * Shuffle a set of numbers without duplicates.

 Example:

 // Init an array with set 1, 2, and 3.
 int[] nums = {1,2,3};
 Solution solution = new Solution(nums);

 // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
 solution.shuffle();

 // Resets the array back to its original configuration [1,2,3].
 solution.reset();

 // Returns the random shuffling of array [1,2,3].
 solution.shuffle();
 */
var Solution = function(nums) {
    this.original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const array = [...this.original];

    for (let i = 1; i < array.length; i++) {
        const newPos = ~~(Math.random()*(i + 1));
        const temp = array[i];
        array[i] = array[newPos];
        array[newPos] = temp;
    }

    return array;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */