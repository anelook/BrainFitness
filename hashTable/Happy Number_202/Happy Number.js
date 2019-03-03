/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const attempted = {};
    while (n !== 1 && !attempted[n]) {
        attempted[n] = true;
        let next = 0;
        while (n > 0) {
            const d = n % 10;
            next += d * d;
            n = (n - d) / 10;
        }
        n = next;
    }
    return n === 1;
};

// A better approach is to avoid usage of hashtable, but rather detect a loop
// Floyd's Cycle detection algorithm | Determining the starting point of cycle
//https://www.youtube.com/watch?v=apIw0Opq5nk

const digitSquareSum = (n) => {
    let next = 0;
    while (n > 0) {
        const d = n % 10;
        next += d * d;
        n = (n - d) / 10;
    }

    return next
}
const isHappy = (n) => {
    let slow = n;
    let fast = n;
    do {
        slow = digitSquareSum(slow);
        fast = digitSquareSum(fast);
        fast = digitSquareSum(fast);
    } while (slow !== fast)
    return slow === 1;
};

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function (n) {
//     while (n > 6) {
//         let next = 0;
//         while (n) {
//             next += (n % 10) * (n % 10);
//             n = ~~(n / 10);
//         }
//         n = next;
//     }
//     return n == 1;
// };