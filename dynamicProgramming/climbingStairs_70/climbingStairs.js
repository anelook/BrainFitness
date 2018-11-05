/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     let fib = [1, 1];

//     for (let i = 2; i <= n; i++) {
//         fib.push(fib[i-1] + fib[i-2]);
//     }

//     return fib[n];
// };
var climbStairs = function(n) {
    let n1 = 0;
    let n2 = 1;

    for (let i = 1; i < n; i++) {
        const temp = n1 + n2;
        n1 = n2;
        n2 = temp
    }

    return n1 + n2;
};