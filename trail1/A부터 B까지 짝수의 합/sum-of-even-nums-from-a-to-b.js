const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;

for (let i = input[0]; i <= input[1]; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}

console.log(sum);