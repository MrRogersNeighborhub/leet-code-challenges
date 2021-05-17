/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let result = 0;
  if (ruleKey === 'type') {
    for (let i = 0; i < items.length; i++) {
      if (items[i][0] === ruleValue) {
        result++;
      }
    }
  } else if (ruleKey === 'color') {
    for (let i = 0; i < items.length; i++) {
      if (items[i][1] === ruleValue) {
        result++;
      }
    }
  } else if (ruleKey === 'name') {
    for (let i = 0; i < items.length; i++) {
      if (items[i][2] === ruleValue) {
        result++;
      }
    }
  }
    return result;
};