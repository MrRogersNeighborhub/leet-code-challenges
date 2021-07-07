/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let res = [], inc = 0, dec = s.length;
  
  for (let i = 0; i < s.length + 1; i++) {
    if (s[i] === 'I') {
      res.push(inc);
      inc++;
    } else {
      res.push(dec);
      dec--;
    }
  }
  
  return res;
};