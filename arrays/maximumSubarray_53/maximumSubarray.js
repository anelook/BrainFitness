/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(a) {
    let cmax = null;
    let amax = a[0];
    for(let i = 0; i < a.length; i++)
    {
        cmax = cmax ? a[i] + cmax : a[i];
        if (cmax>amax) {
            amax=cmax;
        } if (cmax <= 0) {
        cmax=null;
    }
    }
    return amax;
};