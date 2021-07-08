/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let ballMap = {};
    for(let i=lowLimit; i<=highLimit; i++){
        let total = i.toString().split('').reduce((a,b)=>parseInt(a) + parseInt(b),0);
        ballMap[total] = ballMap[total] || 0;
        ballMap[total]++;
    }
    return Math.max(...Object.values(ballMap));
};