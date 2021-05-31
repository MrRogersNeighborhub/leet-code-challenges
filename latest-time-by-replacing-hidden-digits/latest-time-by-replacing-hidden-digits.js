/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  let result = '';
  let hour = time.slice(0, 2);
  let minute = time.slice(3);
  if (hour[0] === '?' && hour[1] === '?') {
    result += '23';
  } else if (hour[0] === '?') {
    if (hour[1] < 4) {
      result += '2';
      result += hour[1];
    } else {
      result += '1';
      result += hour[1];
    }
  } else {
    result += hour[0];
    if (hour[1] === '?') {
      if (hour[0] > 1) {
        result += 3;
      } else {
        result += 9;
      }
    } else {
      result += hour[1];
    }
  }
  result += ':'
  if (minute[0] === '?' && minute[1] === '?') {
    result += '59';
  } else if (minute[0] === '?') {
    result += '5';
    result += minute[1];
  } else if (minute[1] === '?') {
    result += minute[0];
    result += '9';
  } else {
    result += minute[0] + minute[1];
  }
  return result;
};