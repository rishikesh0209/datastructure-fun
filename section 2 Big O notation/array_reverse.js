function reverse(arr){
    let arr2 =[];
    for(let i=arr.length -1;i > -1;i--){
        arr2.push(arr[i]);
    }
    return arr2;
}

    
console.log(reverse([1,2,3,4,5]));
console.log("reverse")