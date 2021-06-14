/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  // let numOfMatches = 0;
  // while (n > 1) {
  //     n % 2 === 1 ? numOfMatches += (n - 1) / 2 : numOfMatches += n / 2;
  //     n = Math.ceil(n / 2);
  // }
  // return numOfMatches;
  return n - 1;
};