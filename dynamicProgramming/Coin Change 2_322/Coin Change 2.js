/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = Array.from({length: amount + 1}, _ => 0)
    dp[0] = 1
    coins.forEach(coin => {
        for (let i = 0; i < dp.length; i++) {
            dp[i] = i >= coin ? dp[i - coin] + dp[i] : dp[i]
        }
    })
    return dp[dp.length - 1]
};