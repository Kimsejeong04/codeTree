const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const a = Math.min(...input);
const b = Math.max(...input);

let sum = 0;

for (let i = a; i <= b; i++) {
    if (i % 5 == 0) {
        sum += i;
    }
}

console.log(sum);