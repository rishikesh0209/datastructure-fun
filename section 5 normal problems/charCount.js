
//count the character in a string
//best solution would be having ascii values as reqgular expression takes some space and time 
function charCount(str){
    let result ={};
    for(let i=0;i<str.length;i++){
        if(/[a-zA-Z0-9]/.test(str[i].toLowerCase())){
            
            console.log("ASdadadsads",result[str[i]] == undefined)
            result[str[i]] = result[str[i]] == undefined ? 1 : ++result[str[i]] 
        }
    }
    return result;
}

console.log(charCount("Hai this is rishikesh 0209"));