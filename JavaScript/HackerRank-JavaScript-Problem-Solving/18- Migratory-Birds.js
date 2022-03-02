function migratoryBirds(arr) {
    // Write your code here
 let max = 0;
 let max_id = 6; // 6 dememizin nedeni 6'ya kadarını garanti etti.
 let store = new Array(6).fill(0); // store = [0,0,0,0,0,0] Burda array'in içinde kaç yazarsa o kadar fill'in içindekinden atar.

for (const num of arr ) { 
  store[num]++; // böylece her sayıdan kaç tane olduğunu saydık yani çıktı - 1 1 2 3 1 1 şeklinde
  if(store[num] > max) { // num dediğimiz arr array'inin içindeki sayıların tek tek alınmış şekli.
    max = store[num]; // max'da bize sayının kaç kez tekrarladğımı söyler.
    max_id = num;
  }else if(store[num] === max && num < max_id) { // Burda eşitlik durumunda küçük sayıyı seç dedik.
    max_id = num;
  }
}
 return max_id;
}

migratoryBirds([1, 4, 4, 4, 5, 3])