/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (S, words) {
    const nextExpected = Array.from({length: words.length}, v => 0);
    let result = 0;

    for (let i = 0; i = S.length; i++) {
        const nextLetter = S[i];
        for (let j = 0; j < words.length; j++) {
            if (nextExpected[j] === -1) {
                continue
            }
            const expectedLetter = words[j][nextExpected[j]]
            if (nextLetter === expectedLetter) {
                nextExpected[j]++;
            }
            if (nextExpected[j] === words[j].length) {
                nextExpected[j] = -1;
                result++;
            }
        }
    }
    return result;
};

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (S, words) {
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        if (isSubsequence(words[i], S)) {
            result++
        }
    }
    return result;
};

const isSubsequence = (word, S) => {
    let searchStart = 0;

    for (let i = 0; i < word.length; i++) {
        const positionInS = S.indexOf(word[i], searchStart);
        if (positionInS > -1) {
            searchStart = positionInS + 1;
        } else {
            return false;
        }
    }
    return true;
}