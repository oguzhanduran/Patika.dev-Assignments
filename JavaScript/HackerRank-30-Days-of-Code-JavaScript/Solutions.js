// Solutions

// Day 0: Hello, World.

function processData(inputString) {
  // This line of code prints the first line of output
  console.log("Hello, World.");

  // Write the second line of output that prints the contents of 'inputString' here.
  console.log(inputString);
}
//----------------------------------------------------------------------------------------------------------------

// Day 1: Data Types

// Declare second integer, double, and String variables.
let i1;
let d1;
let s1;
// Read and save an integer, double, and String to your variables.
i1 = parseFloat(readLine());
d1 = parseFloat(readLine());
s1 = readLine();

// Print the sum of both integer variables on a new line.
console.log(Number(i + i1));

// Print the sum of the double variables on a new line.
d1 = Number(d + d1).toFixed(1);
console.log(d1);
// Concatenate and print the String variables on a new line

// The 's' variable above should be printed first.
console.log(s + s1);

//----------------------------------------------------------------------------------------------------------------

// Day 2: Operators

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  let tip_price = (tip_percent / 100) * meal_cost;
  let tax_price = (tax_percent / 100) * meal_cost;
  let sum = Math.round(meal_cost + tip_price + tax_price);
  console.log(sum);
}

//----------------------------------------------------------------------------------------------------------------

// Day 3: Intro to Conditional Statements
function main() {
  const N = parseInt(readLine().trim(), 10);
  if (N % 2 != 0) {
    console.log("Weird");
  } else if (N % 2 == 0 && N >= 2 && N <= 5) {
    console.log("Not Weird");
  } else if (N % 2 == 0 && N >= 6 && N <= 20) {
    console.log("Weird");
  } else if (N % 2 == 0 && N > 20) {
    console.log("Not Weird");
  }
}

//----------------------------------------------------------------------------------------------------------------

//    Day 4: Class vs. Instance

function Person(initialAge) {
  // Add some more code to run some checks on initialAge

  if (initialAge < 0) {
    age = 0;
    console.log("Age is not valid, setting age to 0.");
  } else if (initialAge > 0) {
    age = initialAge;
  }

  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    if (age < 13) {
      console.log("You are young.");
    } else if (13 <= age && age < 18) {
      console.log("You are a teenager.");
    } else console.log("You are old.");
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    age += 1;
  };
}

//----------------------------------------------------------------------------------------------------------------

//    Day 5: Loops

function main() {
  const n = parseInt(readLine().trim(), 10);
  for (let i = 1; i <= 10; i++) {
    let result;
    result = `${n} x ${i} = ` + n * i;
    console.log(result);
  }
}

//----------------------------------------------------------------------------------------------------------------

//    Day 6: Let's Review

// Önce console'dan kaç tane string okuyacağımızı belirten bir sayı almamız gerekiyor, daha sonra bu sayı kadar inputtaa olan string içersinde bu işlemi yapmamız gerekiyor. Önce console'dan string okummamız gerekiyor. Önce n sayısını yani kaç tane string olacağını buluyoruz. Daha sonra kaç tane string varsa o kadar string'i okumaya çalışcaz.

//    '2\nHacker\nRank' => input bu şekkilde biz bunu input.split('\n') ifade ile bölerek "2", "Hacker", "Rank" haline getirdik.  Sonrasında ise başkaki "2" ifadesini kesmek için .slice(1) methodunu kullanarak "Hacker", "Rank" haline getirdik.

// Sonrasında tüm stringleri tek tek almak için forEach kullandık.

function processData(input) {
  //Enter your code here
  let s = input.split("\n").slice(1);
  s.forEach((str) => {
    let even = "";
    let odd = "";
    for (let i = 0; i < str.length; i++) {
      i % 2 == 0 ? (even += str[i]) : (odd += str[i]);
    }
    console.log(`${even} ${odd}`);
  });
}

//----------------------------------------------------------------------------------------------------------------
//  Day 7: Arrays

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  let arr1 = "";
  arr1 = arr.reverse();
  arr1 = arr.join(" ");
  console.log(arr1);
}

//----------------------------------------------------------------------------------------------------------------

//    Day 8: Dictionaries and Maps

function processData(input) {
  input = input.split("\n");
  var N = parseInt(input[0]);

  var phoneBook = {};
  for (var i = 0; i < N; i++) {
    var line = input[i + 1];
    line = line.split(" ");
    phoneBook[line[0]] = line[1];
  }

  for (let i = N + 1; i < input.length; i++) {
    var num = phoneBook[input[i]];
    if (num !== undefined) {
      console.log(input[i] + "=" + num);
    } else {
      console.log("Not found");
    }
  }
}

// input.split("\n") ile birlikte array haline getirdik.
// input = [
//   '3',
//   'sam 99912222',
//   'tom 11122222',
//   'harry 12299933',
//   'sam',
//   'edward',
//   'harry'
// ]

//----------------------------------------------------------------------------------------------------------------
