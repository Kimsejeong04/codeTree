const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] == 0) {
        for (let j = 1; j <= 3; j++) {
            sum += input[i - j];
        }
        break;
    }
}

console.log(sum);