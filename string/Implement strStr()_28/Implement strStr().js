/**
 * 28. Implement strStr()

 Implement strStr().

 Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 Example 1:

 Input: haystack = "hello", needle = "ll"
 Output: 2
 Example 2:

 Input: haystack = "aaaaa", needle = "bba"
 Output: -1
 Clarification:

 What should we return when needle is an empty string? This is a great question to ask during an interview.

 For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 // using KMP algorithm https://medium.com/@giri_sh/string-matching-kmp-algorithm-27c182efa387
 */

const createAux = (str) => {
    const result = [];
    result.push(0);
    let i = 1;
    let m = 0;
    while (i < str.length) {
        if (str[i] === str[m]) {
            m++;
            result.push(m);
            i++;
        } else if (str[i] !== str[m] && m !== 0) {
            m = result[m - 1]
        } else {
            result.push(0);
            i++;
        }
    }

    return result;
}

const strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }

    const aux = createAux(needle);


    let i = 0; //haystack
    let j = 0; //needle
    while (i < haystack.length) {
        if (haystack[i] !== needle[j]) {
            if (j === 0) {
                i++
            } else {
                j = aux[j - 1];
            }
        } else {
            i++;
            j++;
            if (j === needle.length) {
                return i - needle.length;
            }
        }
    }

    return -1;
};