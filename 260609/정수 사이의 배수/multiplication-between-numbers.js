const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const Mul = [];
let sum = 0;

for (let i = input[0]; i <= input[1]; i++) {
    if (i % 5 == 0 || i % 7 == 0) {
        sum += i;
        Mul.push(i);
    }
}

const avg = sum / Mul.length;
console.log(sum, avg.toFixed(1));