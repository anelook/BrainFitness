/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const h = {};
    for(let i = 0; i < s.length; i++) {
        h[s[i]] = h[s[i]] ? ++h[s[i]] : 1
    }

    for(let i = 0; i < t.length; i++) {
        if(h[t[i]]) {
            h[t[i]]--;
        } else {
            return false;
        }
    }

    return Object.values(h).every(v => v === 0);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join() === t.split('').sort().join()
};



// another one I liked
function isAnagram(s, t) {
    const map = {};
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
    return Object.keys(map).every(k => map[k] === 0);
}