function kangaroo(x1, v1, x2, v2) {
    // Write your code here


var n = (x2 - x1) / (v1 - v2);
    if (n % 1 == 0 && n > 0 ) {
        return "YES";
    } else return "NO";

}