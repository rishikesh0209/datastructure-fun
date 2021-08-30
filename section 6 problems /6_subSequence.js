/*
Write a function called<strong> isSubsequence</strong> which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear somewhere in the second string,
without their order changing.

examples:
isSubsequence('hello','hello world');//true
isSubsequence('sing','sting');//true
isSubsequence('abc','abracadabra');//true
isSubsequence('abc','acb'); // false (as order matters)

*/


isSubsequence = (str1, str2)=>{
    let i=0,j=0;
    if(!str1.length || !str2.length){
        return false;
    }
    while(j < str2.length){
        if(str1[i] == str2[j]){
            i++;
        }
        if(i == str1.length){
            return true;
        }
        j++
    }
    return false
}

console.log(isSubsequence('hello','hello world'));
console.log(isSubsequence('sing','sting'));//true
console.log(isSubsequence('abc','abracadabra'));//true
console.log(isSubsequence('abc','acb')); // false (as order matters)