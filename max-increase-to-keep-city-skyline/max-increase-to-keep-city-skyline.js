/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let total = 0;
  let rowMaxs = new Array(grid.length).fill(0);
  let colMaxs = new Array(grid[0].length).fill(0);
  
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      rowMaxs[i] = Math.max(rowMaxs[i], grid[i][j]);
      colMaxs[j] = Math.max(colMaxs[j], grid[i][j]);
    }
  }


  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      total += Math.min(rowMaxs[i], colMaxs[j]) - grid[i][j];
    }
  }
  return total;
};