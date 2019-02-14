/* Given a sorted array with numbers find the first pair of numbers whose sum is zero. */

let sumZero = (sortedArr) => {
    let left =0, right = sortedArr.length -1;

    while(true) {
        let sum = sortedArr[left] + sortedArr[right]; 

        if(sum === 0) {
            return [sortedArr[left], sortedArr[right]];
        } else if(sum>0){
            right = right -1;
        } else {
            left = left + 1;
        }
    }
};

sumZero([-3,-2,-1,0,1,2,4]);