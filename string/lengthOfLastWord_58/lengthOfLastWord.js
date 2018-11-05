/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let s1 = 0;
    let s2;

    for(let i = s.length - 1; i>=0; i--) {
        if (!s2 && s[i] !== ' ') {
            s2 = i;
        } else if (s2 && s[i] === ' ') {
            s1 = i + 1;
            break;
        }
    }
    return s2 !== undefined ? s2 - s1 + 1 : 0;
};