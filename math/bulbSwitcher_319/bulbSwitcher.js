/**
 *
 * There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the i-th round, you toggle every i bulb. For the n-th round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

 Example:

 Input: 3
 Output: 1
 Explanation:
 At first, the three bulbs are [off, off, off].
 After first round, the three bulbs are [on, on, on].
 After second round, the three bulbs are [on, off, on].
 After third round, the three bulbs are [on, off, off].

 So you should return 1, because there is only one bulb is on.
 
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    return ~~Math.sqrt(n);
};


//For the i-th bulb
//This bulb will be toggled at the n-th round
//if i % n == 0 (n is a divisor of i)
//So the number of times the i-th bulb is toggled
//Equal the number of divisors of i
//After n rounds, the i-th bulb will be on
//If i has an odd number of divisors
//i = (x1 ** m1) * (x2 ** m2) * (x3 ** m3) * ... * (x_n ** m_n)
//with x1, x2, ..., x_n are primes
//The number of divisors of i : N = (m1 + 1) * (m2 + 1) * (m3 + 1) * ... * (m_n + 1)
//The i-th bulb will be on if N is odd => m1, m2, m3, ..., m_n are all even
//=> i is a quare of an integer
//So the problem turns out the be:
//The total number of square numbers from 1 -> n