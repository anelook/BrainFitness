/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 *
 * Though I liked this solution - it is not the fastest....
 */
var selfDividingNumbers = function(left, right) {
    let n = left;
    const result = [];
    while(right >= n) {
        if(n.toString().split('').every(v => v && n % (v*1) === 0)) {
            result.push(n);
        }
        n++;
    }
    return result;
};

/** faster and less elegant one... */
var selfDividingNumbers = function(left, right) {
    let n = left;
    const result = [];
    while(right >= n) {
        let obeys = true;
        let remainder = n;
        while (remainder > 0 && obeys) {
            const lastDigit = remainder % 10;
            obeys = (n % lastDigit === 0);
            remainder = (remainder - lastDigit) / 10;
        }
        if(obeys) {
            result.push(n);
        }
        n++;
    }
    return result;
};