function isAlphanumeric(val) {
    return /^[a-zA-Z0-9]+$/.test(val);
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    while(i < j) {
        if(!isAlphanumeric(s[i])) {
            i++;
            continue;
        }
        if(!isAlphanumeric(s[j])) {
            j--;
            continue;
        }
        if(s[i].toLowerCase() !== s[j].toLowerCase())
            return false;
        i++;
        j--;
    }
    return true;
};

var isPalindrome = function(s) {
    //let stripped = s.split('').filter(isAlphanumeric).map(v=> v.toLowerCase())
    let stripped = s.replace(/[^\w]/g,'').toLowerCase();

    let i = 0;
    let j = stripped.length - 1;
    while(i < j) {
        if(stripped[i] !== stripped[j])
            return false;
        i++;
        j--;
    }
    return true;
};