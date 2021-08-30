/*
    Write a function called&nbsp;&nbsp;which takes in an array of numbers and returns the product of them all.
*/

productArray = (arr)=>{
    if(!arr.length){
        return 1;
    }
    return arr[0] * productArray(arr.slice(1));
}

console.log(productArray([1,2,3]));