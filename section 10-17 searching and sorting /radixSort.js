getDigit = (num, i) => {
    return Math.floor((Math.abs(num) / Math.pow(10, i))) % 10;
}

console.log(getDigit(12345, 2))

digitCount = (num) => {
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}
console.log(digitCount(12312))
maxDigits = (nums) => {
    let maxDigitCount = 0;
    nums.forEach(element => {
        maxDigitCount = Math.max(maxDigitCount, digitCount(element))
    });
    return maxDigitCount;
}

radixSort = (nums) => {
    let maxDigitCount = maxDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBucket = Array.from({length:10},()=>[]);
        for(let i = 0;i< nums.length;i++){
            let digitCount = getDigit(nums[i],k);
            digitBucket[digitCount].push(nums[i]);  

        }
        nums = [].concat(...digitBucket);
    }
    return nums;
}

console.log(maxDigits([12312, 12, 3, 213, 12312, 123]))
console.log(radixSort([23,345,5467,12,2345,9852]));
