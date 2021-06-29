/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let long = '';
  debugger;
  if (s.length === 1) return s;
  for (let i = 0; i < s.length; i++) {
    let count = 1, cur = '';
    if (s[i] === s[i + count]) {
      while (s[i + 1 - count] === s[i + count] && s[i + count] !== undefined) {
        cur = s.substring(i - count + 1, i + count + 1);
        count++;
      }
      if (cur.length > long.length) {
        long = cur;
      }
      count = 1;
    }
    if (s[i + count] === s[i - count]) {
      while (s[i + count] === s[i - count]  && s[i + count] !== undefined) {
        cur = s.substring(i - count, i + count + 1);
        count++;
      }
      if (cur.length > long.length) {
        long = cur;
      }
      count = 1;
    }
  }
  return long.length > 0 ? long : s.substring(0, 1);
};
