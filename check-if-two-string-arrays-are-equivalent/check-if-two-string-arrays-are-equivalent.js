/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  const reducer = (accumulator, current) => accumulator + current;
  
  return word1.reduce(reducer) === word2.reduce(reducer);
};