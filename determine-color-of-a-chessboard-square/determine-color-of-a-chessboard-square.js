/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  return coordinates.charAt(0).charCodeAt() % 2 === 0 ?
    coordinates.charAt(1) % 2 === 1 : 
    coordinates.charAt(1) % 2 !== 1
};