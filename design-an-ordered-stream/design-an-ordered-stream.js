/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.ptr = 1;
  this.stream = [];
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.stream[idKey] = value;
  const res = [];
  while (this.stream[this.ptr] !== undefined) {
    res.push(this.stream[this.ptr]);
    this.ptr++;
  }
  return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */