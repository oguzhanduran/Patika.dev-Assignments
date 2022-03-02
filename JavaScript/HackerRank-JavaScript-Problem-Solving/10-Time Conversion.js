function timeConversion(s) {
    // Write your code here
var amPm = s.charAt(8);
var militaryHour = ""
if (amPm == "A") {
    if (s.substring(0,2) == "12") {
        militaryHour = "00";
    }else{
        militaryHour = s.substring(0,2);
    }
}else {
    if (s.substring(0,2) == "12") { 
      militaryHour = s.substring(0,2);  
    }else {
        militaryHour = Number(s.substring(0,2)) + 12; 
    }
   
   
    
}
return militaryHour + s.substring(2,8)
}