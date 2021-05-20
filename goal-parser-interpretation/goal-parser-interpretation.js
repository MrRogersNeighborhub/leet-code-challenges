/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let result = '';
  for (let i = 0; i < command.length; i++) {
    if (command[i] === '(' && command[i + 1] === 'a') {
      result += 'al';
      i += 3;
    } else if (command[i] === '(' && command[i + 1] === ')') {
      result += 'o';
      i += 1;
    } else {
      result += command[i];
    }
  }
  return result;
};