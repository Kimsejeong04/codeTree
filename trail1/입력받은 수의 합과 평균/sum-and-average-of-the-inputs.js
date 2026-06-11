const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;

for (let i = 1; i <= input[0]; i++) {
    sum += input[i];
}
const avg = sum / input[0];

console.log(sum, avg.toFixed(1));