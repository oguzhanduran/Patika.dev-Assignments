function getTotalX(a, b) {
    // Write your code here
let smallNumber = 1;
let bigNumber = 100;
let counter = 0;
a.forEach((number) => {
   if (number > smallNumber){
       smallNumber = number;
   } 
})
    
b.forEach((number2) => {
    if (number2 < bigNumber) {
        bigNumber = number2;
    } 
})   

for (let i = smallNumber; i <= bigNumber; i++) {
    let result = true;
    for (var j = 0; j <a.length; j++) {  
    if (i % a[j] !== 0){
        result = false; 
        break; 
    }
    }
    if(result) {
      for (var k = 0; k < b.length; k++) {
        if(b[k] % i !== 0){
            result = false;
            break;
        }
      }
      
    }
    
    if (result) {
        counter++
    }
}
return counter;    
}