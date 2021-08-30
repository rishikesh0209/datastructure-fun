binarySearch =(arr,num)=>{
    let left =0;
    let right = arr.length -1;
    // let mid = Math.floor((left+right)/2);
    while(left <=right){
        // let mid =Math.floor((left+right)/2);
        let mid = Math.floor(left + (right - left)/2)
        /*
        Note:

            Here we are using 

            int mid = low + (high – low)/2;

            Maybe, you wonder why we are calculating the middle index this way, we can simply add the lower and higher index and divide it by 2.

            int mid = (low + high)/2;

            But if we calculate the middle index like this means our code is not 100% correct, it contains bugs.

            That is, it fails for larger values of int variables low and high. Specifically, it fails if the sum of low and high is greater than the maximum positive int value(231 – 1 ).

            The sum overflows to a negative value and the value stays negative when divided by 2. In java, it throws ArrayIndexOutOfBoundException.

            int mid = low + (high – low)/2;

            So it’s better to use it like this. This bug applies equally to merge sort and other divide and conquer algorithms.


        */
        if(arr[mid] == num){
            return mid;
        }
        if(arr[mid] > num){
            right = mid - 1;
        }
        if(arr[mid] < num){
            left = mid + 1;
        }
    }
    return - 1;
}

console.log(binarySearch([3,4,5,6,7,8,9,20,21,30,31,41,50],31));

