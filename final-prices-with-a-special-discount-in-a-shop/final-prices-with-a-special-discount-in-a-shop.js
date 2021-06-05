/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  const final = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1]) {
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] <= prices[i]) {
          final.push(prices[i] - prices[j]);
          break;
        }
      }
    }
    if (final.length !== i + 1) {
      final.push(prices[i]);
    }
  }
  return final;
};