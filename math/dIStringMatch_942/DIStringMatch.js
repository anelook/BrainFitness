/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    const result = [];
    let min = 0;
    let max = S.length;
    for(let i = 0; i < S.length; i++) {
        if(S[i] === 'I') {
            result.push(min);
            min++;
        } else {
            result.push(max);
            max--;
        }
    }

    if(S[S.length-1] === 'I') {
        result.push(min);
    } else {
        result.push(max);
    }
    return result;
};

/**shorter version*/
var diStringMatch = function(S) {
    let min = 0;
    let max = S.length;
    return S.split('').map(v => v === 'I' ? min++ : max--).concat(max);
};