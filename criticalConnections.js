/*
There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

Return all critical connections in the network in any order.

example:
Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.


I: an array of connections and number of servers
O: an array of all critical connection (arrays)
C: no less than 2 servers, no repeated connections
E: no critical connections, return an empty array

*/
const criticalConnections = (n, connections) => {
  // need to create a result array
  const result = [];
  // create object to store number as key and connection num as value.
  const map = {};
  // check to find keys with only one connection.
    // iterate through connections
  for (let i = 0; i < connections.length; i++) {
    //check if connections[i][0] is in the map
      // if not then we add it as a key in our map object
    let first = connections[i][0];
    let second = connections[i][1];
    if (!map.hasOwnProperty(first)) {
      // set it equal to an array with value as connection[i][1]
      map[first] = [second];
      // else if it is present
    } else {
      // push connections[i][1] into the key's array
      map[first].push(second);
    }

    //check if connections[i][1] is in the map
    if (!map.hasOwnProperty(second)) {
      // if not then we add it as a key in our map object
      // set it equal to an array with value as connection[i][1]
      map[second] = [first];
      // else if it is present
    } else {
      // push connections[i][1] into the key's array
      map[second].push(first);
    }
  }

    // iterate through map object to find keys with only 1 connection
    for (let key in map) {
      // if only one connection
      if (map[key].length === 1) {
        // push [key,value[0]] into result
        let pair = [key, map[key]];
        result.push(pair);
      }
    }


  return result;
};