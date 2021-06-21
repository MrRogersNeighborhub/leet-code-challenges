/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    if (selfDivideNumber(i)) {
      result.push(i);
    }
  }
  return result;
};

var selfDivideNumber = (num) => {
  let dividers = num.toString().split(''), valid = true;
  for (let i = 0; i < dividers.length; i++) {
    if (num % Number(dividers[i]) !== 0) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return num;
  }
}