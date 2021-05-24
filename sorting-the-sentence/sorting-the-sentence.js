/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  s = s.split(' ');
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    let length = s[i].length - 1;
    temp[s[i][length] - 1] = s[i].slice(0, length);
  }
  return temp.join(' ');
};