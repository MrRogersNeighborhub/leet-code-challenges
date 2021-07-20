/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
  const dp = [0, 1];
  for (let i = n; i >= 1; i--) {
    if (n % i === 0) {
      dp[n] = n - i;
    }
  }
  return dp[n] % 2 === 1;
};