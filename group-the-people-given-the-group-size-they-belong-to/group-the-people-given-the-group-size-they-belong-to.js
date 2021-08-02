/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const parties = [], map = {};
  for (let i = 0; i < groupSizes.length; i++) {
    if (groupSizes[i] === 1) parties.push([i]);
    else {
      map[groupSizes[i]] ? map[groupSizes[i]].push(i) : map[groupSizes[i]] = [i];
    }
  }
  while (Object.keys(map).length) {
    for (let key in map) {
      if (!map[key].length){ 
        delete map[key];
        break;
      }
      let len = key;
      parties.push(map[key].slice(0, len));
      map[key] = map[key].slice(len);
    }
  }
  return parties;
};