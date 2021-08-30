// bubble sort bubbles the largest to the top 

bubbleSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        let noSwaps = true;    
        for(let j=0;j<arr.length - i -1 ;j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = tmp;
                noSwaps = true; 
            }
        }
        if(noSwaps){break;}
    }
    return arr;
}
// descending order
reverseBubbleSort=(arr)=>{
    for(let i= arr.length -1;i >= 0;i--){
        let noSwaps = true;    
        for(let j= arr.length -1; j > arr.length -1 - i;j--){
            if(arr[j] > arr[j - 1]){
                let tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j - 1] = tmp;
                 noSwaps = false; 
            }
        }
        if(noSwaps){break;}

    }
    return arr;
}

// console.log(bubbleSort([37,23,8,45,9]));
console.log(reverseBubbleSort([37,23,8,45,9]));