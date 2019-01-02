/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const h = {}

    for(let i = 0; i < s.length; i ++) {
        if (h[s[i]] === undefined) {
            h[s[i]] = i;
        } else {
            h[s[i]] = -1;
        }
    }

    const v = Object.values(h).find(v=> v != -1) ;

    return v === undefined ? -1 : v ;
};