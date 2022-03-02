
function diagonalDifference(arr) {
    // Write your code here
var n = arr.length;
var sum = 0;
for(let i = 0; i < arr.length; i++) {
    for (let j= 0; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
          sum += arr[i][j];  
        }if ( (i + j) == (n-1)) {
            sum -= arr[i][j];
        }
    }
}
return Math.abs(sum)
}