const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
let avg = 0;
let count = 0;
for (let i = 0; i < 10; i++) {
    if ((i + 1) % 2 == 0) {
        sum += input[i];
    }
    if ((i + 1) % 3 == 0) {
        avg += input[i];
        count++;
    }
}

console.log(sum, (avg / count).toFixed(1));