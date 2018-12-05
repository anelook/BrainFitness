/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    // let min = A[0];
    // let max = A[0];
    // for(let i = 1; i < A.length; i ++) {
    //     min = A[i] < min ? A[i] : min;
    //     max = A[i] > max ? A[i] : max;
    // }

    const max = Math.max(...A);
    const min = Math.min(...A);

    return max-min > K*2 ? max - K - min - K : 0;
};