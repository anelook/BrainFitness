/**
 * DP top-down
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => amount < 1 ? 0 :
    recursive(coins, amount, [])

const recursive = (coins, remainder, minNumOfCoins) => {
    if (remainder < 0) return -1;
    if (remainder === 0) return 0;
    if (minNumOfCoins[remainder - 1]) return minNumOfCoins[remainder - 1]; //do not calculate again
    let min = Number.MAX_SAFE_INTEGER;

    coins.forEach(coin => {
        const res = recursive(coins, remainder - coin, minNumOfCoins);
        if (res >= 0 && res < min) {
            min = 1 + res; //add one more coin
        }
    })
    minNumOfCoins[remainder - 1] = (min === Number.MAX_SAFE_INTEGER) ? -1 : min;
    return minNumOfCoins[remainder - 1];
}

/**
 * DP bottom-up
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    let minNumOfCoins = Array.from({length: amount + 1}, _ => Number.MAX_SAFE_INTEGER);
    minNumOfCoins[0] = 0;
    for (let i = 1; i <= amount; i++) {
        coins.forEach(coin => {
            if (coin <= i) {
                minNumOfCoins[i] = Math.min(minNumOfCoins[i], minNumOfCoins[i - coin] + 1);
            }
        })
    }
    return minNumOfCoins[amount] > amount ? -1 : minNumOfCoins[amount];
}