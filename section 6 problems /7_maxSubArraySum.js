/*
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutiveelements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Examples:
    maxSubarraySum([100,200,300,400],2) //700
    maxSubarraySum([1,4,2,10,23,3,1,0,20],4) //39
    maxSubarraySum([-3,4,0,-2,6,-1],2) //5 
    maxSubarraySum([2,3],3) //null
Time complexity: O(N)
*/

maxSubarraySum = (arr,num) =>{
    if(arr.length < num){
        return null
    }
    let countMax=0;
    for(let i=0;i<num;i++){
        countMax += arr[i];
    }
    let total = countMax;
    for(let i=num;i< arr.length ;i++){
        countMax += arr[i] - arr[i-num];

        total =  Math.max(total,countMax);
    }
    return total;
}
console.log(maxSubarraySum([100,200,300,400],2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)) //39
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2)) //5 
console.log(maxSubarraySum([2,3],3)) //null