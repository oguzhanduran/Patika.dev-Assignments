// First Method

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
{
var apples_count = apples.filter(value => value + a >= s && value + a <= t).length;
var oranges_count = oranges.filter(value => value + b >= s && value + b <= t).length;
}
console.log(apples_count);
console.log(oranges_count);
}

// Second Method

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
var counter1 = 0;
var counter2 = 0;
var newApples = [""];
var newOranges = [""];
for (let i = 0; i < apples.length; i++) {
    newApples[i] = apples[i] + a;
    if((newApples[i] >= s) & (newApples[i] <= t)) {
        counter1++;
    }
}
 console.log(counter1)
 for (let j = 0; j < oranges.length; j++) {
    newOranges[j] = oranges[j] + b;
    if((newOranges[j]) >= s & (newOranges[j] <= t)) {
        counter2++;
    }

}
console.log(counter2)
}

