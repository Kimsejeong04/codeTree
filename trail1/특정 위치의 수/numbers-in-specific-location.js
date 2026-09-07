const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let sum = 0;
for (let i = 0; i < 10; i++) {
    if (i == 2 || i == 4 || i == 9) {
        sum += input[i];
    }
}

console.log(sum);