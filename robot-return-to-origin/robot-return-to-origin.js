/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
   let x = 0, y = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      x++;
    } else if (moves[i] === 'D') {
      x--;
    } else if (moves[i] === 'L') {
      y++;
    } else if (moves[i] === 'R') {
      y--;
    }
  }
  return x === 0 && y === 0;
};