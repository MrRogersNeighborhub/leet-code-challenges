/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let most = 0;
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > most) {
      most = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= most) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};