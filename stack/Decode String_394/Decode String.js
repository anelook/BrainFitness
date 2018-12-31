/**
 *
 Given an encoded string, return it's decoded string.

 The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

 You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

 Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

 Examples:

 s = "3[a]2[bc]", return "aaabcbc".
 s = "3[a2[c]]", return "accaccacc".
 s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */

function isNumeric(str){
    return /^\d+$/.test(str);
}

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let result = '';
    const numbers = []; // stack for k's
    const buffer = []; // stack for letters. use it only when we have child elements
    let i = 0;

    while(i < s.length) {
        if (isNumeric(s[i])) {
            let count = 0; // get the whole number k
            while(isNumeric(s[i])) {
                count = 10 * count + +s[i];
                i++
            }
            numbers.push(count)
        } else if(s[i] === '[') {
            // store what we already calculated in the buffer
            // for matreshka cases "3[a2[bc2[i]]]"
            buffer.push(result);
            result = '';
            i++;
        } else if(s[i] === ']') {
            //let's count!
            const times = numbers.pop();
            result = buffer.pop() + result.repeat(times);
            i++;
        } else {
            // just a letter, remember it
            result += s[i++]
        }
    }
    return result;
};