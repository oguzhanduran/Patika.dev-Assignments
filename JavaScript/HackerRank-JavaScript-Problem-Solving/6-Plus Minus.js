function plusMinus(arr) {
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter1++;
        }else if(arr[i] < 0) {
            counter2++
        }else if (arr[i] == 0) {
            counter3++
        }
    } 