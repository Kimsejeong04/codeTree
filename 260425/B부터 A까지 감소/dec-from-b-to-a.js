const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const result = [];

for (let i = input[1]; i >= input[0]; i--) {
    result.push(i);
}

console.log(result.join(" "));