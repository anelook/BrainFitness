/**
 *
 * Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.

 If there aren't two consecutive 1's, return 0.



 Example 1:

 Input: 22
 Output: 2
 Explanation:
 22 in binary is 0b10110.
 In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
 The first consecutive pair of 1's have distance 2.
 The second consecutive pair of 1's have distance 1.
 The answer is the largest of these two distances, which is 2.
 Example 2:

 Input: 5
 Output: 2
 Explanation:
 5 in binary is 0b101.
 Example 3:

 Input: 6
 Output: 1
 Explanation:
 6 in binary is 0b110.
 Example 4:

 Input: 8
 Output: 0
 Explanation:
 8 in binary is 0b1000.
 There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.


 Note:

 1 <= N <= 10^9

 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    const s = N.toString(2).split('');

    while(s.length > 0 && s[0] ==='0') {
        s.shift();
    }
    while(s.length > 0 && s[s.length - 1] ==='0') {
        s.pop();
    }
    if(s.length === 1) {
        return 0;
    }

    let max = 1;
    let cur = 1;
    for (let i = 0; i< s.length; i++) {
        if (s[i] === '0') {
            cur++;
            max = Math.max(cur, max);
        } else {
            cur = 1;
        }
    }
    return max;
};


/**faster and better*/
var binaryGap = function(N) {
    const s = N.toString(2).split('');

    let max = 1;
    let cur = 1;
    let start = false;
    let ones = 0;
    for (let i = 0; i < s.length; i++) {
        if (!start) {
            if(s[i] === '1') {
                start = true;
                ones++;
            }
            continue;
        }

        if (s[i] === '1') {
            max = Math.max(cur, max);
            cur = 1;
            ones ++;
        } else {
            cur++;
        }
    }
    return ones > 1 ? max : 0;
};


var binaryGap = function(N) {
    const s = N.toString(2).split('');

    let last = -1;
    let max = 0;

    for(let i = 0; i< s.length; i++) {
        if(s[i] === '1') {
            if(last > -1) {
                max = Math.max(max, i - last);
            }
            last = i;
        }
    }

    return max;
};