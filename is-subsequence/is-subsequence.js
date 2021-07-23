/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const dp = s.split('');
  for (let i = t.length; i > -1; i--) {
    if (t[i] === dp[dp.length - 1]) dp.pop();
  }
  return dp.length === 0;
};