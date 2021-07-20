/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];
  
  if (numRows === 0) return result;
  
  for (let i = 0; i < numRows; i++) {
    let cur = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i){
        cur.push(1);
      } else {
        cur.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(cur);
  }
  return result;
};