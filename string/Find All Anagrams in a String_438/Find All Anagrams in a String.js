/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    for(let i = 0; i < s.length - p.length + 1; i++) {
        if(isAnagram(s.slice(i, i + p.length), p)) {
            result.push(i);
        }
    }
    return result;

};

function isAnagram(s, p) {
    const h = {};
    for (let i = 0; i < s.length; i++) {
        h[s[i]] = h[s[i]] === undefined ? 1 : h[s[i]] + 1;
    }

    for(let i = 0; i < p.length; i++) {
        if(h[p[i]] === undefined) {
            return false;
        }
        h[p[i]] = h[p[i]] - 1 ;
    }
    return Object.values(h).every(v => v === 0);
}