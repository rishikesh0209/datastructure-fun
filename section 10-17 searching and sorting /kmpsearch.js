// Construct a table with table[i] as the length of the longest prefix of the substring 0..i
// create a table of size equal to the length of `str`
// table[i] will store the prefix of the longest prefix of the substring str[0..i]
// the longest prefix of the substring str[0] has length
// for the substrings the following substrings, we have two cases
// case 1. the current character doesn't match the last character of the longest prefix
// if that is the case, we have to backtrack, and try find a character  that will be equal to the current character
// if we reach 0, then we couldn't find a chracter
// case 2. The last character of the longest prefix matches the current character in `str`
// if that is the case, we know that the longest prefix at position i has one more character.
// for example consider `.` be any character not contained in the set [a.c]
// str = abc....abc
// consider `i` to be the last character `c` in `str`
// maxPrefix = will be 2 (the first `c` in `str`)
// maxPrefix now will be 3
// so the max prefix for table[9] is 3
function makeTable(str) {
  
    
    var table = new Array(str.length);
    var maxPrefix = 0;
    
    table[0] = 0;
  
    
    for (var i = 1; i < str.length; i++) {
      while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
        
        maxPrefix = table[maxPrefix - 1];
      }
      
      if (str.charAt(maxPrefix) === str.charAt(i)) {
        maxPrefix++;
      }
      table[i] = maxPrefix;
    }
    return table;
  }
  
// Find all the words that matches in a given string `str`
// this algorithm is based on the Knuth–Morris–Pratt algorithm. Its beauty consists in that it performs the matching in O(n)
// find the prefix table in O(n)
// `j` is the index in `word(P)`
// `i` is the index in `str(S)`
// Case 1.  S[i] == P[j] so we move to the next index in `S` and `P`
// Case 2.  `j` is equal to the length of `P`
// that means that we reached the end of `P` and thus we found a match
// Next we have to update `j` because we want to save some time
// instead of updating to j = 0 , we can jump to the last character of the longest prefix well known so far.
// j-1 means the last character of `P` because j is actually `P.length`
// e.g.
// S =  a b a b d e
// P = `a b`a b
// we will jump to `a b` and we will compare d and a in the next iteration
// a b a b `d` e
//  a b `a` b
// Case 3.
// S[i] != P[j] There's a mismatch!
// if we have found at least a character in common, do the same thing as in case 2
// otherwise, j = 0, and we can move to the next character S[i+1]
function kmpMatching(str, word) {
   
    var prefixes = makeTable(word);
    var matches = [];
    
    
    var j = 0;
    var i = 0;
    while (i < str.length) {
      
      if (str.charAt(i) === word.charAt(j)) {
        i++;
        j++;
      }
      
      if (j === word.length) {
        matches.push(i-j);
        
        j = prefixes[j-1];
      }
      
      else if (str.charAt(i) !== word.charAt(j)) {
          
          if (j !== 0) {
              j = prefixes[j-1];
          } else {
              
              i++;
          }
      }
    }
  
    return matches;
  }
console.log(kmpMatching("it implies that it is very important","impli"))
var test = 'potential';

var string = "This fact implies that the loop can execute at most 2n times. For, in each iteration, it " +
    "executes one of the two branches in the loop. The first branch invariably increases i and does not " +
    "change m, so that the index m + i of the currently scrutinized character of S is increased. The second " +
    "branch adds i - T[i] to m, and as we have seen, this is always a positive number. Thus the location m " +
    "of the beginning of the current potential match is increased. Now, the loop ends if m + i = n; " +
    "therefore each branch of the loop can be reached at most k times, since they respectively increase " +
    "either m + i or m, and m = m + i: if m = n, then certainly m + i = n, so that since it increases by " +
    "unit increments at most, we must have had m + i = n at some point in the past, and therefore either " +
    "way we would be done.";

result = kmpMatching(string, test);
console.log("Adsasdasd",result)