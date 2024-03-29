//check if two arrays have same frequency of squared numbers then return true else false
function sameFrequency(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    let frequencyCounter1 ={},frequencyCounter2={};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for(let key in frequencyCounter1){
        if(!(key * key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key * key ] !== frequencyCounter1[key] ){
            return false
        }
    }
    return true;
}

console.log(sameFrequency([1,2,3],[4,1,9]));