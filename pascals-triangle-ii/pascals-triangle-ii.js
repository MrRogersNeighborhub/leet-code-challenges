/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const res = [1];
  for(var i = 1 ; i <= rowIndex ; i++) {
    for(var j = i; j > 0; j--) {
      if (j === i) res[j] = 1;
      else res[j] = res[j - 1] + res[j];
    }
  }
  return res;
};