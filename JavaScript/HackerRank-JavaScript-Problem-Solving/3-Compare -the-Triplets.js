function compareTriplets(a, b) {
    // Write your code here
let counter1 = 0;
let counter2 = 0;
for (let i=0; i < 3; i++) {
    if(a[i] > b[i]) {
        counter1++
    }else if(b[i] > a[i]) {
        counter2++
    }else if(a[i] == b[i]) {
        counter1 += 0;
        counter2 += 0;
    }
}
return [counter1, counter2]
}
