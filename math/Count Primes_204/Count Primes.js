/**
 * @param {number} n
 * @return {number}
 * Count the number of prime numbers less than a non-negative number, n.

 Example:

 Input: 10
 Output: 4
 Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */
var countPrimes = function(n) {
    const possibles = new Array(n).fill(true);
    possibles[0] = false;
    possibles[1] = false;

    for(let i = 2; i*i < n; i++) {
        for (let j = i*i; j<n; j +=i) {
            possibles[j] = false;
        }
    }
    return possibles.reduce((acc, value) => value ? ++acc: acc, 0)
};