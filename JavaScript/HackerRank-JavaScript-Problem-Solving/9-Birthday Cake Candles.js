function birthdayCakeCandles(candles) {
    // Write your code here
    var max = candles[0];
    var counter = 0;
for(let i = 0; i < candles.length; i++) {
   
   if(max < candles[i]) {
       max = candles[i]
   } 
} 
for(let j = 0; j < candles.length; j++) { 
    if (max == candles[j]) {
        counter++
    }
   }
   return counter
}