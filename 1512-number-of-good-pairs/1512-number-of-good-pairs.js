/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counter = 0;
    let iteration = 0;
    let current = 0;
    
    while (iteration < nums.length){;
       for (i = current; i < nums.length; i++){; 
          if (nums[i] === nums[current]){;
              counter++;
          };

        };
          current++ ;
          iteration++ ;
    };
    return (counter - (nums.length));
};