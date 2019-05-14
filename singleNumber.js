/*
    Given a non-empty array which consists of numbers 1-9 return the number which has single occurrence 
*/

var singleNumber = function(nums) {
    var obj = {}; // increases memory
    for(var i=0; i<nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }

    for(key in obj) {
        if(obj[key] === 1){
            return key;
        }
    }
};

singleNumber([4,1,2,1,2]);

