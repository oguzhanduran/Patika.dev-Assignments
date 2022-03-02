// Method 1

function birthday(s, d, m) {
    // Write your code here
    let counter = 0;
    
for (let i = 0; i < s.length; i++) {
    let newArray = s.slice(i, i+m);
    let total = newArray.reduce((acc, number) =>  acc + number )
    if (total == d) counter++
    
}
return counter
}

// Method 2

function birthday(s, d, m) {
    // Write your code here
    let counter = 0;
    
for (let i = 0; i < s.length; i++) {
    let newArray = s.slice(i, i+m);
    let total = 0;
    newArray.forEach((number) => total += number )
    if (total == d) counter++
    
}
return counter
}
