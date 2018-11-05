var longestCommonPrefix = function(strs, index = 0) {
    let strToCompare = strs[0] || "";

    for (let i = 1; i < strs.length; i++) {
        let j = 0;

        if (strs[i].indexOf(strToCompare) !== 0) {
            while (j <= strToCompare.length && strToCompare[j] === strs[i][j]) {
                j++;
            }
            strToCompare = strs[i].substr(0, j);
        }
    }

    return strToCompare;
};