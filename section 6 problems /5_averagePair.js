/*
Write a function called <b>averagePair.
    Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
    There may be more than one pair that matches the average target.
    Time: O(N);
    space: O(1)
*/

averagePair = (arr,avg)=>{
    if(!arr.length){
        return false;
    }
    let start =0;
    let end= arr.length - 1;

    while(start < end){
        let avgFound =  (arr[start] + arr[end])/2;
        if(avgFound == avg){
           return true
        }else if(avgFound < avg){
            start ++;
        }else{
            end --;
        }
    }
}

console.log(averagePair([1,2,3],2.5));