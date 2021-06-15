/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = arr => {
	let sum = 0;

	for (let i = 1; i <= arr.length; i += 2) {
		for (let j = 0; j <= arr.length - i; j++) {
			let odd = arr.slice(j, j + i);
			sum += odd.reduce((acc, cur) => acc + cur);
		}
	}
	return sum;
};