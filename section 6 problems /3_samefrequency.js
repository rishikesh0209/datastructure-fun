//samefrequecy check 
// Write a function called sameFrequency.Given two positive integers, 
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
function sameFrequency(str1,str2){
    if(str1.length != str2.length){
        return false;
    }
    str1 = str1.toString();
    str2 = str2.toString();

    let freqCounter = {},freqCounter2 = {};
    for(let i=0;i<str1.length;i++){
        freqCounter[str1[i]] = (freqCounter[str1[i]] || 0) + 1;
    }
    for(let i=0;i<str2.length;i++){
        freqCounter2[str2[i]] = (freqCounter2[str2[i]] || 0) + 1;
    }
    console.log(freqCounter,freqCounter2);

    for(let key in freqCounter){
        if(!freqCounter2.hasOwnProperty(key)){
            return false;
        }
        if(freqCounter2[key] !== freqCounter[key]){
            return false;
        }
    }
    return true;

}
console.log(sameFrequency(182,281)); //true
console.log(sameFrequency(14,34)); //false
console.log(sameFrequency(3589578,5879385)); //true
console.log(sameFrequency(22,2222)); //false


