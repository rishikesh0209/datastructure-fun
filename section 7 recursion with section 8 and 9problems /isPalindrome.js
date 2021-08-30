/*
  Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). 
  Otherwise it returns false
    // isPalindrome('awesome') // false
    // isPalindrome('foobar') // false
    // isPalindrome('tacocat') // true
    // isPalindrome('amanaplanacanalpanama') // true
    // isPalindrome('amanaplanacanalpandemonium') // false
*/
isPalindrome =(str)=>{    
    reverseString=(stringGiven)=>{
        if(stringGiven.length == 1){
            return stringGiven;
        }
        return stringGiven[stringGiven.length -1 ] + reverseString(stringGiven.slice(0,stringGiven.length - 1));
    }
    if(reverseString(str) === str){
        return true;
    }
    return false;
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("awesome"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));



