/**
 * Simple solution with time complexity O(n) and space complexity O(1)
 * There is also  a dynamic programming approach https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts
 * and divide and concour  https://leetcode.com/problems/maximum-subarray/discuss/20372/How-to-solve-%22Maximum-Subarray%22-by-using-the-divide-and-conquer-approach?page=2
 * I haven't touched the other ones
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(a) {
    let cmax = null; //current max in ongoing calculation
    let amax = a[0]; // absolute max among all we see
    for(let i = 0; i < a.length; i++)
    {
        cmax = cmax ? a[i] + cmax : a[i];
        if (cmax>amax) { // we can also use Math.max(cmax, amax)
            amax=cmax;
        } if (cmax <= 0) { //
            cmax = null;
    }
    }
    return amax;
};

/** found a variation of the solution in Serg' github
*   solution looks a bit cleaner*/
var maxSubArray2 = function(a) {
    let cmax = a[0]; //current max in ongoing calculation
    let amax = a[0]; // absolute max among all we see
    for(let i = 1; i < a.length; i++)
    {
         cmax = Math.max(cmax + a[i], a[i]);
         amax = Math.max(amax, cmax);
    }
    return amax;
};

