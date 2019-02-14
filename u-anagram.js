/* Given two strings, write a function to determine if the second string is an anagram of the first. 
    An anagram is a word, phrase, or name formed by rearranging the letters of another, 
    such as cinema formed from iceman. 
*/

const populateObj = (str) => {
    let tempObj = {};
    for(let val of str.split('')) {
        tempObj[val] = (tempObj[val] || 0) + 1;
    }
    return {...tempObj};
}

function validAnagram(str1, str2){
    let str1Obj,str2Obj;
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length) {
        return false;
    }
    
    str1Obj = populateObj(str1);
    str2Obj = populateObj(str2);

    for(let key in str1Obj) {
        if(str1Obj[key] !== str2Obj[key]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram("iceman","cinema"));