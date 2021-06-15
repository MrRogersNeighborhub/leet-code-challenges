/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let result = 0, arr = allowed.split(''), map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = 1;
  }
  for (let i = 0; i < words.length; i++) {
    let cur = words[i].split(''), pass = true;
    for (let j = 0; j < cur.length; j++) {
      if (!map[cur[j]]) {
        pass = false;
        break;
      }
    }
    if (pass) {
      result++;
    }
  }
  return result;
};