// insertion sort, sorts the array in left sorted way 
// it checks immediate left if its smaller we then see whiere does the val fit in the array

insertionSort = (arr) =>{
    for(let i =1;i<arr.length;i++){
        let currentVal = arr[i];
        let j = i -1;
        for(;j>=0 && arr[j] > currentVal;j--){
            arr[j+1] =  arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([5, 37, 23, 9, 48]));
