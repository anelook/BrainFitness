const dictionary = { M:1000, D:500, C:100, L:50, X:10, V:5, I:1 };

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(value) {
    return value.split('').reverse().reduce((acc, _, i, arr) => {
        const current = dictionary[arr[i]];
        const previous = dictionary[arr[i - 1]] || 0;
        return previous > current ? acc - current : acc + current
    }, 0);
};