/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  const sortedDeck = deck.sort((a,b) => b - a);

  const res = [];
  for (let i = 0; i < sortedDeck.length; i ++) {
    res.unshift(sortedDeck[i]);
    if (i !== sortedDeck.length - 1) {
      const bottom = res.pop();
      res.unshift(bottom);
    }
  }
  return res;
};