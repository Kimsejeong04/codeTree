const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const result = [];

while (input[0] >= input[1]) {
    if (input[0] % 2 == 0) {
        result.push(input[0]);
    }
    input[0]--;
}

console.log(result.join(" "));