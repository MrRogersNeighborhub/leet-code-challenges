/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let res = [], i = 1;
  if (n % 2 === 1 || n === 1) {
    res.push(0);
  }
  while (res.length !== n) {
    res.push(i, 0 - i);
    i++;
  }
  return res;
};