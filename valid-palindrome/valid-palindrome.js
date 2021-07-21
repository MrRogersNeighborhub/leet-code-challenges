/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().split(' ').join('');
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57) continue;
    if (s[i].charCodeAt() < 97 || s[i].charCodeAt() > 122) {
      s = s.substring(0, i) + s.substring(i + 1);
      i--;
    }
  }
  // numbers are 48 - 57
  console.log(s);
  let start = 0, end = s.length - 1;
  while (start <= end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++, end--;
  }
  return true;
};