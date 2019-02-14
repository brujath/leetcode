/* given two arrays return true if the sqrt of the array elemt exists in the other array
    example: [1,2,3] [4,1,9] //true
             [2,3,4,5] [16,25,9] //false
             [2,3,5] [4,9,26] //false
*/

//o(n^2) solution 

const same0n2 = (arr1, arr2) => {
    // check length first
    if(!(arr1.length === arr2.length)) {
        return false;
    }

    for(let i= 0; i<=arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]**2);
        if(index === -1) {
            return false
        }
        arr2.splice(index,1);
    }
    return true;
}

//0(n) solution

const same0n = (arr1, arr2) => {
    let frequencyCounter1, frequencyCounter2;

    if(!(arr1.length === arr2.length)) {
        return false;
    }

    frequencyCounter1 = {};
    frequencyCounter2 = {};
    
    for(let val of arr1){ //n iterations
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of arr2){ //n iterations
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

    for(let key in frequencyCounter1){ //n iterations
        if(!(key ** 2 in frequencyCounter2)){ // check if sqrt of the key is available
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ //check the count of occurence 
            return false
        }
    }
    return true
}

