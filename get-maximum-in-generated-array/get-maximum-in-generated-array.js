/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n === 0 || n === 1) return n; 
  
  const dp = [0, 1];
  let i = 1, max = 0; 
  
  while(dp.length < n + 1) {
    dp.push(dp[i]);
    max = Math.max(max, dp[dp.length -1]);
    if(dp.length < n + 1) {
      dp.push(dp[i] + dp[i+1]);
      max = Math.max(max, dp[dp.length -1]);
    }
    i++;
  }
  return max;
};