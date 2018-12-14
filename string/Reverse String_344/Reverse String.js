/**
 * Write a function that takes a string as input and returns the string reversed.

 Example 1:

 Input: "hello"
 Output: "olleh"
 Example 2:

 Input: "A man, a plan, a canal: Panama"
 Output: "amanaP :lanac a ,nalp a ,nam A"

 * @param {string} s
 * @return {string}
 *
 * Using two pointer technique:
 */
var reverseString = function(s) {
    const mid =  ~~(s.length/2);
    const a = s.split('');
    for(let i = 0, j = s.length -1; i < mid, j >= mid; i++, j--) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    return a.join('');
};