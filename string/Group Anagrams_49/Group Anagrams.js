/**
 * @param {wording[]} words
 * @return {wording[][]}
 */
const groupAnagrams = words => {
    const map = {};

    for (let word of words) {
        const key = [...word].sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }

    return Object.values(map);
};