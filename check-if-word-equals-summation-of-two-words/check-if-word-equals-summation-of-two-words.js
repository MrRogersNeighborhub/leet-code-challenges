/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  const map = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
  }
  let num1 = '', num2 = '', num3 = '';
  for (let i = 0; i < firstWord.length; i++) {
    num1 += (map[firstWord[i]]).toString();
  }
  for (let i = 0; i < secondWord.length; i++) {
    num2 += (map[secondWord[i]]).toString();
  }
  for (let i = 0; i < targetWord.length; i++) {
    num3 += (map[targetWord[i]]).toString();
  }
  return Number(num1) + Number(num2) === Number(num3);
};