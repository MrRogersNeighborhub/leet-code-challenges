/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  let temp = [];
  temp.length = n - 1;
  temp.fill('a');
  if (n % 2 === 1) {
    temp.push('a');
  } else {
    temp.push('b');
  }
  return temp.join('');
};