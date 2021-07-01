/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const result = [];
  for (let i = 0; i < boxes.length; i++) {
    let count = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (Number(boxes[j]) === 1 && i !== j) {
        count += Math.abs(j - i); 
      }
    }
    result.push(count);
  }
  return result;
};