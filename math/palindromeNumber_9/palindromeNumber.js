/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

 Example 1:

 Input: 121
 Output: true
 Example 2:

 Input: -121
 Output: false
 Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 Example 3:

 Input: 10
 Output: false
 Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 Follow up:

 Coud you solve it without converting the integer to a string?
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let l = Math.ceil(Math.log10(x + 1));
    while (l>1 && x > 0) {
        const head = x % 10;
        const tail = Math.pow(10, l-1);
        const diff = x - head*tail;
        if (diff > 0 && diff<tail) {
            l -=2;
            x = (x - head - head*tail) / 10
        } else {
            return false;
        }
    }
    return true;
};

/* No need to calculate length.... */
var isPalindrome = function(x) {
    if (x > 0 && x % 10 === 0) {
        return false;
    }

    let reverted = 0;
    let temp = x;
    while (temp > 0) {
        reverted = (reverted * 10) + (temp % 10);
        temp = ~~(temp/10);
    }

    return reverted === x;
};
