/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const res = [];
  for (let i = 0 ; i < s.length; i++) {
    let pointer = 0;
    while (s[i + pointer] !== c && s[i - pointer] !== c) {
      // if (s[i + pointer] === c || s[i - pointer] === c) {
      //   break;
      // } else {
        pointer++;
      // }
    }
    res.push(pointer);
  }
  return res;
};