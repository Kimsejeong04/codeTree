const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, m] = input[0].split(" ").map(Number);

let temp = n;
n = m;
m = temp;

console.log(n, m)