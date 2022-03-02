function breakingRecords(scores) {
    // Write your code here
let minRecord = scores[0];
let maxRecord = scores[0];
let counterMin = 0;
let counterMax = 0;
let i;
scores.forEach((number) => {
    if(number > maxRecord) {
        counterMax++
        maxRecord = number;
        
    }
    if (number < minRecord) {
        counterMin++;
        minRecord = number;
        
    }
    
})
  return [counterMax, counterMin]
}
