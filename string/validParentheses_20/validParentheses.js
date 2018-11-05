/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let b = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let r = true;
    let l = [];
    for (let i = 0; i < s.length; i++) {
        const c = b[s[i]];
        if (c) {
            l.unshift(c)
        } else if (s[i] === l[0]) {
            l.shift();
        } else {
            r = false;
            break;
        }
    }
    return r && !l.length;
};