var countValues = function(arr) {
    var i = 0, j=i+1;
    while(j<=arr.length-1) {
        if(arr[i]!==arr[j]) {
            i++;
            arr[i] = arr[j];
        } else {
            j++;
        }
    }

    console.log( arr[i]);
};

countValues([1,2,2,2,3,4,4,4,4,5,6]);
