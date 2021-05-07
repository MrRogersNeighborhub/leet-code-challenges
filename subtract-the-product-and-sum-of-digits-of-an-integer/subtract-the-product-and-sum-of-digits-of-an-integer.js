/**
 * @param {number} n
 * @return {number}
I: A number
O: also a number, but representing the difference between the product of all the digits and the sum of digits
C: will always be positive
E:
 */
var subtractProductAndSum = function(n) {
  /*
  Change the input number into a string or an array so that we can iterate over it
  one variable to track the product
  one variable to track the sum
  return the product - sum
  */
  
  const stringNum = n.toString();
  let product = 1;
  let sum = 0;
  for (let i = 0; i < stringNum.length; i++) {
    product *= Number(stringNum[i]);
    sum += Number(stringNum[i]);
  }
  return product - sum;
};