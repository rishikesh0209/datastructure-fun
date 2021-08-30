
iterativeFib=(num) =>{
    let a=0,b=1;
    let sum = a +b;
    console.log(a);
    console.log(b);
    while(sum < num){
        sum =a + b;
        if(sum < num){
            console.log(sum);
        }
        a = b;
        b = sum;
    }
}
// console.log(iterativeFib(10));

recurrsiveFib=(num)=>{

    if(num <=2){
        return 1;
    }

    return recurrsiveFib(num-1) + recurrsiveFib(num-2);

}
console.log(recurrsiveFib(10));
