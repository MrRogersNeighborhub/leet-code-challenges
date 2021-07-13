/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  for (let i = 0; i < haystack.length; i++) {
    let lead = 0;
    while (haystack[i + lead] === needle[lead]) {
      if (lead === needle.length - 1) {
        return i;
      }
      lead++;
    }
  }
  return -1;
};