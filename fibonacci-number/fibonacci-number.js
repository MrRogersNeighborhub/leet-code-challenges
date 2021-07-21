/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const dp =[0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};