function miniMaxSum(arr) {
    // Write your code here
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var sum1 = 0;
    var sum2 = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  
    if (max < arr[i]) {
        max = arr[i];
    }if(min > arr[i]) {
        min = arr[i]
    }
}
sum1 = sum - max;
sum2 = sum - min;
console.log(sum1, sum2)
}
