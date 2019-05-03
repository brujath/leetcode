//Given an array of sorted values find uniquenumber count

var countValues = function(arr) {
    var i = 0, j=i+1;
    if(arr.length===0) return 0;
    while(j<=arr.length-1) {
        if(arr[i]!==arr[j]) {
            i++;
            arr[i] = arr[j];
        } else {
            j++;
        }
    }
    
    return i+1;
};

countValues([1,2,2,2,3,4,4,4,4,5,6]);
