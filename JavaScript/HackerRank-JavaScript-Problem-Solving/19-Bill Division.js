function bonAppetit(bill, k, b) {
    // Write your code here
let sum = bill.reduce((acc, number) => acc + number);
sum = sum - bill[k]
sum = sum / 2 ;
let annaPaying = b - sum
if (annaPaying == 0) {
    console.log("Bon Appetit")
}else console.log(annaPaying)

}